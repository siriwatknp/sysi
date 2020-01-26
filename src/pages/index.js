import React from 'react';
import { Element } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import SupportInfo from '../components/SupportInfo';
import LevelInfo from '../components/LevelInfo';
import Banner from '../components/Banner';
import SEO from '../components/seo';
import Layout from '../components/Layout';
import FixedImage from '../components/FixedImage';
import FluidImage from '../components/FluidImage';
import thoughtworks_logo from '../images/thoughtworks_logo.jpg';

import { supports, levels, doodles, logos } from '../data/home';

const useStyles = makeStyles(({ breakpoints }) => ({
  title: {
    zIndex: 1,
    top: '50%',
    position: 'relative',
    transform: 'translateY(-56%)',
    color: '#fff',
    letterSpacing: '2px',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)',
    fontSize: 36,
    textAlign: 'center',
    lineHeight: 1.2,
    [breakpoints.up('sm')]: {
      fontSize: 48,
    },
    [breakpoints.up('md')]: {
      position: 'absolute',
      fontSize: 48,
      right: '8%',
    },
    [breakpoints.up('lg')]: {
      fontSize: 72,
    },
    [breakpoints.up('xl')]: {
      fontSize: 108,
    },
  },
  banner: {
    position: 'absolute !important',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: -2,
  },
  blur: {
    background: 'rgba(246, 152, 92, 0.6)',
    [breakpoints.up('md')]: {
      background:
        'linear-gradient(to left, rgba(246, 152, 92, 0.9) 40%, rgba(246, 152, 92, 0) 80%)',
    },
  },
  content: {
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: 0.5,
  },
  heading: {
    lineHeight: 1.4,
    textAlign: 'center',
  },
  logo: {
    maxHeight: 120,
    margin: 0,
  },
  doodle: {
    width: 184,
    height: 184,
    margin: 'auto',
    marginBottom: '1.5em',
  },
  divider: {
    maxWidth: 600,
  },
}));

const IndexPage = () => {
  const styles = useStyles();
  return (
    <Layout>
      <SEO title={'หน้าหลัก • Home'} />
      <Box
        color={'common.white'}
        bgcolor={'primary.main'}
        height={{ xs: 264, sm: 300, md: 400, lg: 500, xl: 700 }}
        px={2}
        py={4}
        zIndex={1}
        position={'relative'}
      >
        <h1 className={styles.title}>
          เครือข่ายนวัตกรรม <br />
          คนรุ่นใหม่
        </h1>
        <Box
          className={styles.blur}
          position={'absolute'}
          top={0}
          left={0}
          width={'100%'}
          height={'100%'}
          zIndex={-1}
          css={{}}
        />
        <Banner className={styles.banner} />
      </Box>
      <Box bgcolor={'grey.50'}>
        <Container>
          <Box py={{ xs: 5, sm: 8, md: 10 }} maxWidth={700} mx={'auto'}>
            <h2 className={styles.heading}>
              หากคุณเป็นคนรุ่นใหม่ที่มีฝัน อยากร่วมเปลี่ยนแปลงสังคมในด้านต่างๆ
              มาร่วมเปลี่ยนแปลงไปพร้อมกับเรา!
            </h2>
            <br />
            <Paper>
              <Box p={2} lineHeight={2} fontSize={18}>
                เครือข่ายนวัตกรรมคนรุ่นใหม่
                สนับสนุนคนรุ่นใหม่ทั่วประเทศที่ต้องการเปลี่ยนแปลงสังคมรอบตัว
                ผ่านการทดลองทําโครงการไปจนถึงขยับขยายก่อตั้งองค์กรของตนเอง
                จะเป็นการแก้ปัญหาและพัฒนาสังคมในประเด็นไหนก็ได้
                และด้วยวิธีการอะไรก็ได้
              </Box>
            </Paper>
          </Box>
        </Container>
      </Box>
      <Container>
        <Box py={{ xs: 5, sm: 8, md: 10 }}>
          <h2>
            <Box align={'center'} pb={{ sm: 3, md: 5 }}>
              การสนับสนุนของเรา
            </Box>
          </h2>
          <Grid container spacing={3}>
            {supports.map(support => (
              <Grid key={support.title} item xs={12} sm={6}>
                <SupportInfo {...support} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <Element name={'courses'}>
        <Box bgcolor={'grey.50'}>
          <Container>
            <Box py={{ xs: 5, sm: 8, md: 10 }}>
              <h2>
                <Box align={'center'} pb={{ sm: 3, md: 5 }}>
                  ระดับที่เราสนับสนุน
                </Box>
              </h2>
              <Grid container spacing={4} justify={'center'}>
                {levels.map((getLevel, i) => (
                  <Grid key={i} item xs={12} sm={6} md={4}>
                    <LevelInfo {...getLevel(styles)} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Container>
        </Box>
      </Element>
      <Container>
        <Box py={{ xs: 5, sm: 8, md: 10 }} textAlign={'center'}>
          <h3>ลักษณะผู้เข้าร่วมและโครงการที่เราค้นหา</h3>
          <br />
          <Grid container spacing={4} justify={'center'}>
            {doodles.map(doodle => (
              <Grid key={doodle.fileName} item xs={6} sm={4}>
                <Box maxWidth={200} mx={'auto'}>
                  <FixedImage
                    className={styles.doodle}
                    alt={doodle.alt}
                    fileName={doodle.fileName}
                  />
                  <p>{doodle.label}</p>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <Divider light />
      <Container>
        <Box py={{ xs: 5, md: 6 }}>
          <Box align={'center'}>
            <h3>ทีมงาน</h3>
            <Box mb={5}>
              <Grid container spacing={4} justify={'center'}>
                {logos.map(logo => (
                  <Grid key={logo.alt} item>
                    <img className={styles.logo} alt={logo.alt} {...logo} />
                  </Grid>
                ))}
              </Grid>
            </Box>
            <Divider className={styles.divider} light />
            <br />
            <br />
            <Grid container spacing={4} justify={'center'}>
              <Grid item xs={12} sm={6} md={3}>
                <h3>พันธมิตร</h3>
                <img
                  style={{ maxHeight: 160, marginTop: -16 }}
                  alt={'new generation logo'}
                  src={thoughtworks_logo}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <h3>สนับสนุนโดย</h3>
                <Box maxWidth={160} mt={3}>
                  <FluidImage alt={'สสส'} fileName={'sss_logo'} />
                </Box>
              </Grid>
            </Grid>
            <br />
            <br />
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default IndexPage;
