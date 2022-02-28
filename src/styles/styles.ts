import { createStyles, Theme } from '@material-ui/core/styles';

export const commonStyles = (theme: Theme) => {
  return createStyles({
    button: {
      height: '52px',
      color: theme.palette.text.primary + ' !important',
      backgroundColor: theme.palette.primary.main + ' !important',
      padding: '15px',
      width: '100%',
      borderRadius: '50px !important',
      fontSize: '1rem',
      textAlign: 'center',
      margin: 'auto',
      textTransform: 'none',
      maxWidth: 312,
    },
  });
};
