import React from 'react';
import { Element, Link } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import EventItem from '../../components/EventItem';

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
  },
}));

const Rookie = () => {
  const styles = useStyles();
  return (
    <Box bgcolor={'grey.50'}>
      <Container>
        <Box py={{ xs: 3, sm: 5, md: 8 }}>
          <Grid container justify={'space-between'}>
            <Grid item xs={12} sm={8} md={7}>
              <Element name={'about'}>
                <h1>ระดับเริ่มต้น • Rookie</h1>
                <p>
                  สำหรับผู้ที่มีไอเดียแก้ปัญหาสังคมที่ตนเองพบเจอ
                  และอยากจะทดลองทำเพื่อแก้ปัญหานั้นให้ได้
                  ผู้สมัครอาจจะมีประสบการณ์แก้ปัญหานั้นๆ
                  มาบ้างแล้วหรือยังไม่มีประสบการณ์เลยก็ได้
                </p>
              </Element>
              <Element name={'condition'}>
                <Box mb={1}>
                  <b>เงื่อนไข</b>
                </Box>
                <ul>
                  <li>อายุระหว่าง 15 - 25 ปี</li>
                  <li>จำนวนสมาชิก 1 - 3 คน</li>
                  <li>ทุนสนับสนุนไม่เกิน 20,000 บาท</li>
                  <li>
                    ทำนวัตกรรม / โครงการระหว่าง เดือน เม.ย. 63 - ก.ย. 63 (4
                    เดือน)
                  </li>
                  <li>สามารถเข้าร่วมกิจกรรมของโครงการตามตารางได้ทุกครั้ง</li>
                </ul>
              </Element>
              <Element name={'schedule'}>
                <Box mb={1}>
                  <b>กำหนดการ</b>
                </Box>
                <EventItem
                  startDate={{ day: 10, month: 'ม.ค. 63' }}
                  endDate={{ day: 28, month: 'ก.พ. 63' }}
                  title={'รับสมัคร'}
                  description={
                    <>สำหรับส่งทางไปรษณีย์ หมดเขตวันที่ 24 ก.พ. 63</>
                  }
                />
                <EventItem
                  startDate={{ day: 3, month: 'มี.ค. 63' }}
                  title={'ประกาศผลรอบใบสมัคร'}
                />
                <EventItem
                  startDate={{ day: 7, month: 'มี.ค. 63' }}
                  endDate={{ day: 8 }}
                  title={'ประกาศผลรอบสัมภาษณ์'}
                />
                <EventItem
                  startDate={{ day: 4, month: 'เม.ย. 63' }}
                  endDate={{ day: 7 }}
                  title={'ปฐมนิเทศ'}
                />
                <EventItem
                  startDate={{ day: 5, month: 'มิ.ย. 63' }}
                  endDate={{ day: 7 }}
                  title={'Workshop ติดอาวุธ'}
                />
                <EventItem
                  startDate={{ day: 4, month: 'ก.ค. 63' }}
                  endDate={{ day: 5 }}
                  title={'ลงพื้นที่เรียนรู้ (Field Trip)'}
                />
                <EventItem
                  startDate={{ day: 7, month: 'ส.ค. 63' }}
                  endDate={{ day: 9 }}
                  title={'ถอดบทเรียน'}
                />
                <br />
              </Element>
              <Element name={'course'}>
                <Box mb={1}>
                  <b>เนื้อหาในหลักสูตร</b>
                </Box>
                <div>เนื้อหาที่เรียนรู้ร่วมกัน</div>
                <ul>
                  <li>
                    เปิดโลกทัศน์จากการเรียนรู้ร่วมกับเพื่อน การดูงาน
                    และกรณีศึกษา (Learn from Peers, Field Trips and Case
                    studies)
                  </li>
                  <li>
                    ทำความเข้าใจปัญหาอย่างลึกซึ้ง (Get Insights and Analyse Root
                    Causes)
                  </li>
                  <li>
                    มองเห็นวิธีแก้ไขปัญหาที่หลากหลาย (Explore the Diversities of
                    Solutions)
                  </li>
                  <li>สร้างทฤษฎีการเปลี่ยนแปลง (Create Theory of Change)</li>
                  <li>สร้างวิธีการวัดผลโครงการ (Measure Success)</li>
                  <li>
                    รู้จักตัวเอง และเรียนรู้การทำงานร่วมกันในทีม (Collaboration
                    and Leadership Style)
                  </li>
                  <li>
                    จัดการเอกสารและการเงิน (Report and Financial Management)
                  </li>
                  <li>
                    ทบทวนการเติบโตหลังจบโครงการ (Review Personal Growth and
                    Project Outcome)
                  </li>
                  <li>
                    มองเห็นโอกาสในอนาคตสำหรับเส้นทางการโครงการเพื่อสังคม (Path
                    for Social Innovators)
                  </li>
                </ul>
                <div>เนื้อหาที่เลือกเรียนตามความสนใจ</div>
                <ul>
                  <li>วิธีจัดการความขัดแย้ง (Conflict Management)</li>
                  <li>
                    สร้างการมีส่วนร่วมกับผู้มีส่วนได้ส่วนเสีย (Stakeholders
                    Engagement)
                  </li>
                  <li>
                    การสร้างพื้นที่ในการแลกเปลี่ยนและสะท้อนคิด (Facilitator
                    Skills)
                  </li>
                  <li>
                    นโยบายสำหรับนวัตกรทางสังคม (Policy for Social Innovator)
                  </li>
                  <li>วิธีทำงานแบบอะไจล์ (Agile : Fail Fast Move Forward)</li>
                  <li>
                    วิธีผลิตไอเดียอย่างสร้างสรรค์ (How to Have Creative Ideas)
                  </li>
                  <li>วิธีให้ฟี้ดแบ็คที่สร้างสรรค์ ​(Constructive Feedback)</li>
                  <li>เล่าเรื่องให้โดนใจ - พูด (Story Telling - Verbal)</li>
                  <li>เล่าเรื่องให้โดนใจ - เขียน (Story Telling - Writing)</li>
                  <li>กลยุทธการสื่อสารสาธารณะ (Communication Strategy)</li>
                  <li>ขับเคลื่อนด้วยวัฒนธรรมข้อมูล (Data Driven Culture)</li>
                  <li>
                    เลือกใช้ข้อมูลเพื่อพัฒนาประสิทธิภาพงาน (Basic Data for
                    Efficiency)
                  </li>
                  <li>
                    การบริหารทรัพยากรบุคคล / หาอาสาสมัคร (Manage you Human
                    Resource/ How to Attract Volunteer)
                  </li>
                  <li>การหาเงินทุน (Finance your Project)</li>
                  <li>และอื่นๆ</li>
                </ul>
              </Element>
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <Box
                position={'sticky'}
                top={96}
                mt={2}
                borderLeft={'1px solid'}
                borderColor={'grey.100'}
              >
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
                  className={'test'}
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
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

Rookie.propTypes = {};
Rookie.defaultProps = {};

export default Rookie;
