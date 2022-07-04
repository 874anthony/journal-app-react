import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { TurnedInNot } from '@mui/icons-material';
import { setActiveNote } from '../../store/journal';

export const SidebarItem = ({ title, body, id, date, imageUrls = [] }) => {
  const dispatch = useDispatch();

  const onClickNote = () => {
    dispatch(setActiveNote({ title, body, id, date, imageUrls }));
  };

  const newTitle = useMemo(() => {
    return title.legnth > 17 ? `${title.substring(0, 17)}...` : title;
  }, [title]);

  return (
    <ListItem key={id} disablePadding>
      <ListItemButton onClick={onClickNote}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>

        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText secondary={body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
