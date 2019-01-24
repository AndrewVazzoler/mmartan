import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flex: '1 1 auto',
      zIndex: 3,
      position: 'relative',
      overflow: 'hidden',
      flexDirection: 'column',
      background: '#ccc'
    },
    pagination: {
      display: 'flex',
      listStyle: 'none',
      marginBottom: 0,
      paddingLeft: 0,
      '& a': {
        textDecoration: 'none'
      },
      '& a.page-link': {
        color: '#736e6e',
        display: 'block',
        lineHeight: 1.25,
        marginLeft: '-1px',
        minWidth: '3.5rem',
        textAlign: 'center',
        position: 'relative',
        padding: '0.75rem 1rem'
      },
      '& .page-spreed': {
        color: '#736e6e',
        display: 'block',
        lineHeight: 1.25,
        marginLeft: '-1px',
        textAlign: 'center',
        position: 'relative',
        padding: '0.75rem 0'
      },
      '& a.page-link:not(:disabled):not(.disabled)': {
        cursor: 'pointer'
      },
      '& li.page-item.active a.page-link': {
        zIndex: 1,
        color: '#445565 !important',
        border: '1px solid #dee2e6',
        borderRadius: '.25rem'
      },
      '& li.page-item:first-child a.page-link': {
        borderRadius: '.25rem'
      },
      '& a.page-link.disabled': {
        cursor: 'none',
        pointerEvents: 'none',
        color: '#ccc'
      }
    }
  });

export default styles;
