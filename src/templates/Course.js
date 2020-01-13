import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Element, Link } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import ListItem from '@material-ui/core/ListItem';
import CloudDownload from '@material-ui/icons/CloudDownload';
import { lightBlue } from '@material-ui/core/colors';
import EventItem from '../components/EventItem';

const useStyles = makeStyles(({ palette }) => ({
  listItem: {
    borderRadius: 4,
    marginLeft: 16,
    '&:hover': {
      fontWeight: 'bold',
    },
  },
  activeListItem: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  elmLinkMobile: {
    fontSize: 28,
    minHeight: 56,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: palette.grey[500],
  },
  elmLinkMobileActive: {
    fontWeight: 'bold',
    color: lightBlue[900],
  },
  download: {
    margin: 'auto',
  },
}));

const useGridStyles = makeStyles(({ palette }) => ({
  item: {
    position: 'relative',
    '&:not(:last-of-type)': {
      '&:after': {
        content: '" "',
        display: 'block',
        position: 'absolute',
        height: '32%',
        width: 1,
        backgroundColor: palette.grey[100],
        top: '50%',
        right: 0,
        transform: 'translateY(-50%)',
      },
    },
  },
}));

const Rookie = ({
  title,
  description,
  condition,
  timeline,
  material,
  downloadProps,
}) => {
  const styles = useStyles();
  const gridStyles = useGridStyles();
  return (
    <Box bgcolor={'grey.50'}>
      <Container>
        <Box pb={{ xs: 3, sm: 5, md: 8 }}>
          <Grid container justify={'space-between'}>
            <Grid item md={1} />
            <Grid item xs={12} sm={8} md={7}>
              <Element name={'about'}>
                <Box pt={{ xs: 3, sm: 5, md: 8 }}>
                  <h1>{title}</h1>
                  <p>{description}</p>
                </Box>
              </Element>
              <Element name={'condition'}>
                <Box mb={1}>
                  <b>เงื่อนไข</b>
                </Box>
                {condition}
              </Element>
              <Element name={'schedule'}>
                <Box mb={1}>
                  <b>กำหนดการ</b>
                </Box>
                {timeline.map((event, i) => (
                  <EventItem key={i} {...event} />
                ))}
                <br />
              </Element>
              <Element name={'course'}>
                <Box mb={1}>
                  <b>เนื้อหาในหลักสูตร</b>
                </Box>
                {material}
              </Element>
            </Grid>
            <Hidden only={'xs'}>
              <Grid item xs={12} sm={3} md={3}>
                <Box position={'sticky'} top={96} mt={{ sm: 8, md: 12 }}>
                  <Box borderLeft={'1px solid'} borderColor={'grey.100'}>
                    <Link
                      activeClass={styles.activeListItem}
                      to={'about'}
                      smooth
                      spy
                      offset={-96}
                      duration={800}
                    >
                      <ListItem className={styles.listItem} button>
                        เกี่ยวกับ
                      </ListItem>
                    </Link>
                    <Link
                      activeClass={styles.activeListItem}
                      to={'condition'}
                      smooth
                      spy
                      offset={-96}
                      duration={800}
                    >
                      <ListItem className={styles.listItem} button>
                        เงื่อนไข
                      </ListItem>
                    </Link>
                    <Link
                      activeClass={styles.activeListItem}
                      to={'schedule'}
                      smooth
                      spy
                      offset={-96}
                      duration={800}
                    >
                      <ListItem className={styles.listItem} button>
                        กำหนดการ
                      </ListItem>
                    </Link>
                    <Link
                      activeClass={styles.activeListItem}
                      to={'course'}
                      smooth
                      spy
                      offset={-96}
                      duration={800}
                    >
                      <ListItem className={styles.listItem} button>
                        หลักสูตร
                      </ListItem>
                    </Link>
                  </Box>
                  {downloadProps && (
                    <Box mt={3} maxWidth={200}>
                      <Button
                        variant={'contained'}
                        color={'primary'}
                        fullWidth
                        component={'a'}
                        {...downloadProps}
                        target={'_blank'}
                        rel={'noopener'}
                        startIcon={<CloudDownload />}
                      >
                        โหลดใบสมัคร
                      </Button>
                    </Box>
                  )}
                </Box>
              </Grid>
            </Hidden>
            <Hidden smUp>
              <Box
                position={'fixed'}
                left={0}
                right={0}
                bottom={0}
                bgcolor={'common.white'}
              >
                <Paper elevation={8}>
                  <Grid container>
                    <Grid item xs classes={gridStyles}>
                      <Link
                        className={styles.elmLinkMobile}
                        activeClass={styles.elmLinkMobileActive}
                        to={'about'}
                        smooth
                        spy
                        offset={-96}
                        duration={800}
                      >
                        <FontAwesomeIcon icon={['fad', 'info-circle']} />
                      </Link>
                    </Grid>
                    <Grid item xs classes={gridStyles}>
                      <Link
                        className={styles.elmLinkMobile}
                        activeClass={styles.elmLinkMobileActive}
                        to={'condition'}
                        smooth
                        spy
                        offset={-96}
                        duration={800}
                      >
                        <FontAwesomeIcon
                          icon={['fad', 'clipboard-list-check']}
                        />
                      </Link>
                    </Grid>
                    <Grid item xs classes={gridStyles}>
                      <Link
                        className={styles.elmLinkMobile}
                        activeClass={styles.elmLinkMobileActive}
                        to={'schedule'}
                        smooth
                        spy
                        offset={-96}
                        duration={800}
                      >
                        <FontAwesomeIcon icon={['fad', 'calendar-alt']} />
                      </Link>
                    </Grid>
                    <Grid item xs classes={gridStyles}>
                      <Link
                        className={styles.elmLinkMobile}
                        activeClass={styles.elmLinkMobileActive}
                        to={'course'}
                        smooth
                        spy
                        offset={-96}
                        duration={800}
                      >
                        <FontAwesomeIcon icon={['fad', 'books']} />
                      </Link>
                    </Grid>
                    {downloadProps && (
                      <Grid
                        item
                        xs
                        classes={gridStyles}
                        container
                        alignItems={'center'}
                        justify={'center'}
                      >
                        <IconButton
                          component={'a'}
                          {...downloadProps}
                          target={'_blank'}
                          rel={'noopener'}
                          color={'primary'}
                          className={styles.download}
                        >
                          <CloudDownload />
                        </IconButton>
                      </Grid>
                    )}
                  </Grid>
                </Paper>
              </Box>
            </Hidden>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

Rookie.propTypes = {};
Rookie.defaultProps = {};

export default Rookie;
