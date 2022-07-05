import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from '../../src/helpers/fileUpload';

cloudinary.config({
  cloud_name: 'anthony874',
  api_key: '739319218663158',
  api_secret: 'MrkBLoyRli26ZtVZbhydKzfxBjQ',
  secure: true,
});

describe('Pruebas en FileUpload()', () => {
  xtest('should subir el archivo correctamente a Cloudinary', async () => {
    const imageURL =
      'https://19yw4b240vb03ws8qm25h366-wpengine.netdna-ssl.com/wp-content/uploads/10-Free-To-Use-CORS-Proxies-1024x768.png';

    const resp = await fetch(imageURL);
    const blob = await resp.blob();

    const file = new File([blob], 'hackbg.jpg');
    const url = await fileUpload(file);

    expect(typeof url).toBe('string');

    const segments = url.split('/');
    const imageId = segments[segments.length - 1].replace('.png', '');

    await cloudinary.api.delete_resources(['journal/' + imageId], {
      resource_type: 'image',
    });
  });

  xtest('should return null', async () => {
    const file = new File([], 'hackbg.jpg');
    const url = await fileUpload(file);
    expect(url).toBe(null);
  });
});
