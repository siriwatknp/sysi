import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SupportInfo from '../components/SupportInfo';
import LevelInfo from '../components/LevelInfo';
import Banner from '../components/Banner';
import SEO from '../components/seo';
import crew from '../images/sysi_crew.jpg';

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
}));

const IndexPage = () => {
  const styles = useStyles();
  return (
    <>
      <SEO title="Home" />
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
          <Box py={3}>
            <h2>เราเป็นใคร</h2>
            <h3>Lorem ipsum dolor sit amet Ut enim ad minim veniam</h3>
            <br />
            <Paper>
              <Box p={2}>
                <b>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo
                </b>
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
                icon={<FontAwesomeIcon icon="hand-usd" />}
                title={'เงินทุน • FUNDING'}
                content={
                  <>
                    เข้าถึงเงินทุนสําหรับสนับสนุนการทํากิจกรรมไปจนถึงการก่อตั้งองค์กร
                    ตั้งแต่ <br /> 10,000 บาท - 650,000 บาท
                  </>
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SupportInfo
                icon={<FontAwesomeIcon icon="book-spells" />}
                title={'ทักษะ • TRAINING'}
                content={
                  'พัฒนาความรู้และทักษะที่จําเป็นต่อการพัฒนาตนเอง พัฒนาทีมและพัฒนาโครงการ ไม่ว่าจะเป็นวิธีคิด เครื่องมือ'
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SupportInfo
                icon={<FontAwesomeIcon icon="monitor-heart-rate" />}
                title={'ติดตาม • MONITORING'}
                content={
                  'ลงพื้นที่ติดตามและให้คําปรึกษาแต่ละโครงการ สนับสนุนการเติบโตทั้งระดับบุคคล ระดับทีม และการสร้างผลกระทบของโครงการ'
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SupportInfo
                icon={<FontAwesomeIcon icon="chart-network" />}
                title={'เครือข่าย • NETWORK'}
                content={
                  'เส้นทางการสร้างการเปลี่ยนแปลงทางสังคม จะไปได้ยาว ถ้าไปด้วยกัน ที่นี่สนับสนุนการเรียนรู้ร่วมกันอย่างเข้มข้นระหว่างเพื่อนร่วมรุ่น'
                }
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
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
                  extra={'เปิดรับสมัครแล้ว! หมดเขต 1 เม.ย 63'}
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
                      <br />• ทุนสนับสุนน 10,000-20,000 บาท
                    </>
                  }
                  actions={[
                    {
                      label: 'โหลดใบสมัคร',
                      variant: 'contained',
                      color: 'primary',
                    },
                    { label: 'อ่านรายละเอียด', variant: 'contained' },
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
                      <br />• ทุนสนับสุนน 30,000-50,000 บาท
                    </>
                  }
                  actions={[{ label: 'อ่านรายละเอียด', variant: 'contained' }]}
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
                      <br />• ทุนสนับสุนน 300,000-650,000 บาท
                    </>
                  }
                  actions={[{ label: 'อ่านรายละเอียด', variant: 'contained' }]}
                />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Container>
        <Box py={{ xs: 5, sm: 8, md: 10 }}>
          <Box align={'center'}>
            <h3>ทีมงาน</h3>
            <Box maxWidth={{ sm: 600, md: 700, lg: 800 }}>
              <img src={crew} alt={'crew'} />
            </Box>
            <h3>สนับสนุนโดย</h3>
            <Box maxWidth={240}>
              <img
                src={
                  'https://upload.wikimedia.org/wikipedia/th/a/a4/%E0%B9%82%E0%B8%A5%E0%B9%82%E0%B8%81%E0%B9%89_%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88_%E0%B8%AA%E0%B8%AA%E0%B8%AA_%E0%B8%AA%E0%B8%B3%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%81%E0%B8%AD%E0%B8%87%E0%B8%97%E0%B8%B8%E0%B8%99%E0%B8%AA%E0%B8%99%E0%B8%B1%E0%B8%9A%E0%B8%AA%E0%B8%99%E0%B8%B8%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B9%80%E0%B8%AA%E0%B8%A3%E0%B8%B4%E0%B8%A1%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%A0%E0%B8%B2%E0%B8%9E.png'
                }
                alt={'sponsor'}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default IndexPage;
