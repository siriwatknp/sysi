import React from 'react';
import cx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Element, Link } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import ListItem from '@material-ui/core/ListItem';
import CloudDownload from '@material-ui/icons/CloudDownload';
import { lightBlue } from '@material-ui/core/colors';
import EventItem from '../components/EventItem';
import LevelBannerImage from '../components/LevelBannerImage';

const useStyles = makeStyles(({ palette, breakpoints }) => ({
  listItem: {
    borderRadius: 4,
    marginLeft: 16,
    '&:hover': {
      fontWeight: 'bold',
    },
  },
  banner: {
    margin: '0 -16px',
    [breakpoints.up('sm')]: {
      margin: 0,
    },
  },
  activeListItem: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  elmLinkMobile: {
    fontSize: 24,
    minHeight: 60,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: palette.grey[500],
  },
  elmLinkMobileActive: {
    fontWeight: 'bold',
    color: lightBlue[900],
  },
  iconLabel: {
    fontSize: 10,
    marginTop: 4,
    color: palette.grey[600],
  },
  download: {
    color: palette.primary.main,
    textDecoration: 'none',
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
  bannerName,
  description,
  condition,
  timeline,
  material,
  downloadProps,
}) => {
  const styles = useStyles();
  const gridStyles = useGridStyles();
  const toc = [
    {
      to: 'about',
      label: 'เกี่ยวกับ',
      icon: ['fad', 'info-circle'],
      content: (
        <Box pt={{ xs: 3, sm: 5, md: 8 }}>
          <h1>{title}</h1>
          <LevelBannerImage className={styles.banner} fileName={bannerName} />
          <br />
          <p>{description}</p>
        </Box>
      ),
    },
    {
      to: 'condition',
      label: 'เงื่อนไข',
      icon: ['fad', 'clipboard-list-check'],
      content: (
        <>
          <Box mb={1}>
            <b>เงื่อนไข</b>
          </Box>
          {condition}
        </>
      ),
    },
    {
      to: 'schedule',
      label: 'กำหนดการ',
      icon: ['fad', 'calendar-alt'],
      content: (
        <>
          <Box mb={1}>
            <b>กำหนดการ</b>
          </Box>
          {timeline.map((event, i) => (
            <EventItem key={i} {...event} />
          ))}
          <br />
        </>
      ),
    },
    {
      to: 'course',
      label: 'เนื้อหา',
      icon: ['fad', 'books'],
      content: (
        <>
          <Box mb={1}>
            <b>เนื้อหาในหลักสูตร</b>
          </Box>
          {material}
        </>
      ),
    },
  ];
  return (
    <Box bgcolor={'grey.50'}>
      <Container>
        <Box pb={{ xs: 3, sm: 5, md: 8 }}>
          <Grid container justify={'space-between'}>
            <Grid item md={1} />
            <Grid item xs={12} sm={8} md={7}>
              {toc.map(item => (
                <Element key={item.label} name={item.to}>
                  {item.content}
                </Element>
              ))}
            </Grid>
            <Hidden implementation="css" only={'xs'}>
              <Grid item xs={12} sm={3} md={3}>
                <Box position={'sticky'} top={96} mt={{ sm: 8, md: 12 }}>
                  <Box borderLeft={'1px solid'} borderColor={'grey.100'}>
                    {toc.map(item => (
                      <Link
                        key={item.label}
                        activeClass={styles.activeListItem}
                        to={item.to}
                        smooth
                        spy
                        offset={-96}
                        duration={800}
                      >
                        <ListItem className={styles.listItem} button>
                          {item.label}
                        </ListItem>
                      </Link>
                    ))}
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
            <Hidden implementation="css" smUp>
              <Box
                position={'fixed'}
                zIndex={1000}
                left={0}
                right={0}
                bottom={0}
                bgcolor={'common.white'}
              >
                <Paper elevation={8}>
                  <Grid container>
                    {toc.map(item => (
                      <Grid item xs classes={gridStyles}>
                        <Link
                          className={styles.elmLinkMobile}
                          activeClass={styles.elmLinkMobileActive}
                          to={item.to}
                          smooth
                          spy
                          offset={-96}
                          duration={800}
                        >
                          <FontAwesomeIcon icon={item.icon} />
                          <span className={styles.iconLabel}>{item.label}</span>
                        </Link>
                      </Grid>
                    ))}
                    {downloadProps && (
                      <Grid
                        item
                        xs
                        classes={gridStyles}
                        container
                        alignItems={'center'}
                        justify={'center'}
                      >
                        <a
                          {...downloadProps}
                          target={'_blank'}
                          rel={'noopener'}
                          className={cx(styles.elmLinkMobile, styles.download)}
                        >
                          <CloudDownload />
                          <span className={styles.iconLabel}>โหลดใบสมัคร</span>
                        </a>
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
