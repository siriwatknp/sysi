import React from 'react';
import { Link } from 'gatsby';
import { Element } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import SupportInfo from '../components/SupportInfo';
import LevelInfo from '../components/LevelInfo';
import Banner from '../components/Banner';
import SEO from '../components/seo';
import FixedImage from '../components/FixedImage';
import FluidImage from '../components/FluidImage';
import sysi_logo from '../images/sysi_logo.jpg';
import influencer_logo from '../images/influencer_logo.jpg';
import achieve_logo from '../images/a-chieve_logo.jpg';
import doplus_logo from '../images/doplus_logo.jpg';
import newgeneration_logo from '../images/new-generation_logo.jpg';
import sss_logo from '../images/sss_logo.jpg';
import thoughtworks_logo from '../images/thoughtworks_logo.jpg';
import doodleA from '../images/doodle-A.png';
import doodleB from '../images/doodle-B.png';
import doodleC from '../images/doodle-C.png';
import doodleD from '../images/doodle-D.png';
import doodleE from '../images/doodle-E.png';
import doodleF from '../images/doodle-F.png';

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
}));

const IndexPage = () => {
  const styles = useStyles();
  return (
    <>
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
            <Grid item xs={12} sm={6}>
              <SupportInfo
                icon={<FontAwesomeIcon icon={['fad', 'hands-usd']} />}
                title={'เงินทุน • FUNDING'}
                content={
                  <>
                    เข้าถึงเงินทุนสําหรับสนับสนุนการทําโครงการไปจนถึงการก่อตั้งองค์กร
                    ตั้งแต่ ระดับไม่เกิน 20,000 บาท ไม่เกิน 50,000 บาท
                    และไม่เกิน 650,000 บาท
                  </>
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SupportInfo
                icon={<FontAwesomeIcon icon={['fad', 'book-spells']} />}
                title={'ทักษะ • TRAINING'}
                content={
                  'พัฒนาความรู้และทักษะที่จําเป็นต่อการพัฒนาตนเอง พัฒนาทีม และพัฒนาโครงการ ไม่ว่า จะเป็นวิธีคิด เครื่องมือ ความรู้ทางสังคม และการบริหารโครงการ'
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SupportInfo
                icon={<FontAwesomeIcon icon={['fad', 'monitor-heart-rate']} />}
                title={'ติดตาม • MONITORING'}
                content={
                  'ลงพื้นที่ติดตามและให้คําปรึกษาแต่ละโครงการ สนับสนุนการเติบโตทั้งระดับบุคคล ระดับทีม และการสร้างผลกระทบของโครงการ'
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SupportInfo
                icon={<FontAwesomeIcon icon={['fad', 'chart-network']} />}
                title={'เครือข่าย • NETWORK'}
                content={
                  'เส้นทางการสร้างการเปลี่ยนแปลงทางสังคม จะไปได้ยาว ถ้าไปด้วยกัน ที่นี่สนับสนุนการเรียนรู้ร่วมกันอย่างเข้มข้นระหว่างเพื่อนร่วมรุ่น'
                }
              />
            </Grid>
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
                <Grid item xs={12} sm={6} md={4}>
                  <LevelInfo
                    title={'ระดับเริ่มต้น • Rookie'}
                    extra={'เปิดรับสมัครแล้ว ถึง 28 ก.พ. 63'}
                    content={
                      <>
                        <h4 className={styles.content}>
                          สําหรับผู้ที่มีไอเดียในการแก้ปัญหาสังคมที่ตนเองพบเจอ
                          และอยากจะทดลองทําเพื่อแก้ปัญหานั้นให้ได้
                        </h4>
                        • อายุระหว่าง 15-25 ปี
                        <br />
                        • จํานวนสมาชิก 1-3 คน
                        <br />
                        • ระยะเวลาทําโครงการ 3-5 เดือน
                        <br />• ทุนสนับสุนน ไม่เกิน 20,000 บาท
                      </>
                    }
                    actions={[
                      {
                        id: 'download-app-form-rookie',
                        label: 'โหลดใบสมัคร',
                        variant: 'contained',
                        color: 'primary',
                        component: 'a',
                        href:
                          'https://drive.google.com/file/d/1-BvfvmxaeoRKt4_WMYRAz9ObeTl6O14B/view?usp=sharing',
                        target: '_blank',
                        rel: 'noopener',
                      },
                      {
                        label: 'อ่านรายละเอียด',
                        variant: 'contained',
                        component: Link,
                        to: '/courses/rookie',
                      },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <LevelInfo
                    title={'ระดับกลาง • Semi-Pro'}
                    content={
                      <>
                        <h4 className={styles.content}>
                          สําหรับกลุ่มที่ต้องการขยับขยายให้สิ่งที่ทําสร้างผลกระทบทางสังคมมากขึ้น
                          จริงจังมากขึ้น
                        </h4>
                        • อายุระหว่าง 15-27 ปี
                        <br />
                        • จํานวนสมาชิก 2-5 คน
                        <br />
                        • ระยะเวลาทําโครงการ 3-6 เดือน
                        <br />• ทุนสนับสุนน ไม่เกิน 50,000 บาท
                      </>
                    }
                    actions={[
                      { label: 'อ่านรายละเอียด', variant: 'contained' },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <LevelInfo
                    title={'ระดับใกล้โปร • Turn-Pro'}
                    content={
                      <>
                        <h4 className={styles.content}>
                          สําหรับกลุ่มที่ต้องการจริงจังกับการแก้ปัญหาในประเด็นที่ทําและต้องการการสนับสนุน
                          เพื่่อสร้างองค์กรของตนเองสําหรับทํางานต่อในระยะยาว
                        </h4>
                        • อายุระหว่าง 20-30 ปี
                        <br />
                        • จํานวนสมาชิก 3-5 คน
                        <br />
                        • ระยะเวลาทําโครงการ 10-12 เดือน
                        <br />• ทุนสนับสุนน ไม่เกิน 650,000 บาท
                      </>
                    }
                    actions={[
                      { label: 'อ่านรายละเอียด', variant: 'contained' },
                    ]}
                  />
                </Grid>
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
            <Grid item xs={6} sm={4}>
              <Box maxWidth={200} mx={'auto'}>
                <FixedImage
                  className={styles.doodle}
                  alt={'doodle'}
                  fileName={'doodle-A'}
                />
                <p>มีศักยภาพและความมุ่งมั่น</p>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Box maxWidth={200} mx={'auto'}>
                <FixedImage
                  className={styles.doodle}
                  alt={'doodle'}
                  fileName={'doodle-B'}
                />
                <p>พร้อมที่จะเรียนรู้ร่วมกับเพื่อนอย่างเข้มข้น</p>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Box maxWidth={200} mx={'auto'}>
                <FixedImage
                  className={styles.doodle}
                  alt={'doodle'}
                  fileName={'doodle-C'}
                />
                <p>แก้ปัญหาตรงจุด และเป็นไปได้</p>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Box maxWidth={200} mx={'auto'}>
                <FixedImage
                  className={styles.doodle}
                  alt={'doodle'}
                  fileName={'doodle-D'}
                />
                <p>สร้างสรรค์ คิดการใหญ่</p>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Box maxWidth={200} mx={'auto'}>
                <FixedImage
                  className={styles.doodle}
                  alt={'doodle'}
                  fileName={'doodle-E'}
                />
                <p>เห็นโอกาสเติบโต สร้างผลกระทบทางสังคมเพิ่ม</p>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Box maxWidth={200} mx={'auto'}>
                <FixedImage
                  className={styles.doodle}
                  alt={'doodle'}
                  fileName={'doodle-F'}
                />
                <p>เกิดผลยั่งยืน กับกลุ่มเป้าหมาย</p>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Divider light />
      <Container>
        <Box py={{ xs: 2, sm: 4, md: 6 }}>
          <Box align={'center'}>
            <h3>ทีมงาน</h3>
            <br />
            <Box mb={5}>
              <Grid container spacing={4} justify={'center'}>
                <Grid item>
                  <img
                    className={styles.logo}
                    alt={'sysi logo'}
                    src={sysi_logo}
                  />
                </Grid>
                <Grid item>
                  <img
                    className={styles.logo}
                    alt={'influencer logo'}
                    src={influencer_logo}
                  />
                </Grid>
                <Grid item>
                  <img
                    className={styles.logo}
                    alt={'achieve logo'}
                    src={achieve_logo}
                  />
                </Grid>
                <Grid item>
                  <img
                    className={styles.logo}
                    alt={'doplus logo'}
                    src={doplus_logo}
                  />
                </Grid>
                <Grid item>
                  <img
                    className={styles.logo}
                    alt={'new generation logo'}
                    src={newgeneration_logo}
                  />
                </Grid>
                <Grid item>
                  <img
                    className={styles.logo}
                    alt={'new generation logo'}
                    src={thoughtworks_logo}
                  />
                </Grid>
              </Grid>
            </Box>
            <Divider light />
            <br />
            <br />
            <h3>สนับสนุนโดย</h3>
            <br />
            <Box maxWidth={160}>
              <FluidImage alt={'doodle'} fileName={'sss_logo'} />
            </Box>
            <br />
            <br />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default IndexPage;
