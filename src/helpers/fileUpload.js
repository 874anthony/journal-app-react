export const fileUpload = async (file) => {
  if (!file) throw new Error('No tenemos ningun archivo a subir');

  const CLOUD_URL = 'https://api.cloudinary.com/v1_1/anthony874/upload';
  const formData = new FormData();

  formData.append('upload_preset', 'react-journal-app');
  formData.append('file', file);

  try {
    const resp = await fetch(CLOUD_URL, {
      method: 'POST',
      body: formData,
    });

    if (!resp.ok) throw new Error('No se pudo subir imagen');

    const cloudResponse = await resp.json();

    return cloudResponse.secure_url;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
