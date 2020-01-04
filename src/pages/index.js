import React from 'react';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SupportInfo from '../components/SupportInfo';

import SEO from '../components/seo';

const useStyles = makeStyles(() => ({
  title: {
    color: '#fff',
    textAlign: 'center',
    letterSpacing: '2px',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.4)',
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
        minHeight={{ xs: 264 }}
        px={2}
        py={4}
      >
        <h1 className={styles.title}>เครือข่ายนวัตกรรมคนรุ่นใหม่</h1>
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
        <Box py={3}>
          <h2>การสนับสนุนของเรา</h2>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <SupportInfo
                title={'เงินทุน • FUNDING'}
                content={
                  'เข้าถึงเงินทุนสําหรับสนับสนุนการทํากิจกรรมไปจนถึงการก่อตั้งองค์กร ตั้งแต่ 10,000 บาท - 650,000 บาท'
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SupportInfo
                title={'ทักษะ • TRAINING'}
                content={
                  'พัฒนาความรู้และทักษะที่จําเป็นต่อการพัฒนาตนเอง พัฒนาทีมและพัฒนาโครงการ ไม่ว่าจะเป็นวิธีคิด เครื่องมือ'
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SupportInfo
                title={'ติดตาม • MONITORING'}
                content={
                  'ลงพื้นที่ติดตามและให้คําปรึกษาแต่ละโครงการ สนับสนุนการเติบโตทั้งระดับบุคคล ระดับทีม และการสร้างผลกระทบของโครงการ'
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SupportInfo
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
          <Box py={3}>
            <h2>ระดับที่เราสนับสนุน</h2>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default IndexPage;
