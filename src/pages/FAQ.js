import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';

const useStyles = makeStyles(() => ({
  item: {
    padding: '20px 16px',
    marginBottom: 8,
    borderRadius: 8,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
  },
  question: {
    margin: 0,
  },
  answer: {
    marginTop: 12,
  },
  action: {
    top: 36,
  },
}));

const FAQ = () => {
  const styles = useStyles();
  const [openKey, setOpenKey] = React.useState('');
  return (
    <Box bgcolor={'grey.50'}>
      <Container maxWidth={'md'}>
        <Box py={{ xs: 3, sm: 5, md: 8 }}>
          <h1>คำถามที่พบบ่อย</h1>
          <List>
            {getData().map(({ question, answer }) => (
              <ListItem className={styles.item}>
                <p className={styles.question}>
                  <b>{question}</b>
                </p>
                <Collapse in={openKey === question}>
                  <div className={styles.answer}>{answer}</div>
                </Collapse>
                <ListItemSecondaryAction className={styles.action}>
                  <IconButton
                    aria-label="toggle"
                    onClick={() =>
                      setOpenKey(openKey === question ? '' : question)
                    }
                  >
                    {openKey === question ? (
                      <KeyboardArrowUp />
                    ) : (
                      <KeyboardArrowDown />
                    )}
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Box>
      </Container>
    </Box>
  );
};

const getData = () => [
  {
    question:
      'โครงการนวัตกรรมประเด็นไหนสามารถสมัครเข้าร่วมเครือข่ายนวัตกรรมคนรุ่นใหม่ได้บ้าง ?',
    answer: (
      <ul>
        <li>
          เรายินดีสนับสนุนคนรุ่นใหม่ที่ต้องการเปลี่ยนแปลงสังคมในทุกประเด็น
        </li>
        <li>
          ไม่ว่าจะเป็นประเด็นด้าน การศึกษา ความเท่าเทียม สิ่งแวดล้อม
          ความยุติธรรม สิทธิและเสรีภาพ LGBTQIA+ ชนกลุ่มน้อย ชาติพันธุ์ ผู้อพยพ
          คนพิการ แรงงาน ศิลปะ วัฒนธรรม ความเชื่อ ศาสนา สันติภาพ การเมือง
          ความมั่นคง เศรษฐกิจ เทคโนโลยี สุขอนามัย การแพทย์ พลังงาน
          และประเด็นอื่นๆ ตามที่ผู้สมัครเห็นว่าสำคัญและอยากแก้ปัญหา
        </li>
      </ul>
    ),
  },
  {
    question: 'ผู้เข้าร่วมและโครงการลักษณะแบบไหนที่เราค้นหา ?',
    answer:
      'เราตามหาผู้เข้าร่วมที่มีความมุ่งมั่น พร้อมพัฒนาตนเองและเรียนรู้ร่วมกับเพื่อนอย่างเข้มข้นตลอดโครงการ คิดการใหญ่ในขณะที่รับฟังและใส่ใจในรายละเอียด โครงการมีความเป็นไปได้ แก้ปัญหาได้ตรงจุด และเกิดผลยั่งยืนกับกลุ่มเป้าหมาย',
  },
  {
    question: 'คนในทีมมีอายุน้อยหรือมากกว่าที่ระบุสมัครได้ไหม ?',
    answer: (
      <div>
        <p>ผู้สมัครทุกคนในทีมจะต้องมีอายุอยู่ในช่วงที่ระบุในแต่ละรุ่น ได้แก่</p>
        <ul>
          <li>Rookie (ระดับเริ่มต้น) อายุระหว่าง 15 - 25 ปี</li>
          <li>Semi-Pro (ระดับกลาง) อายุระหว่าง 15 - 27 ปี</li>
          <li>Turn-Pro (ระดับใกล้โปร) อายุระหว่าง 20 - 30 ปี</li>
        </ul>
      </div>
    ),
  },
  {
    question: 'ถ้าไม่มีบัตรประชาชนหรือสัญชาติไทย สามารถสมัครได้ไหม ?',
    answer: 'สมัครได้',
  },
  {
    question: 'ถ้าไม่สามารถเข้าร่วมกิจกรรมตามกำหนดการทุกครั้ง สมัครได้ไหม ?',
    answer:
      'เราคาดหวังว่าท่านจะสามารถเข้าร่วมกิจกรรมได้ทุกครั้ง และใช้พื้นที่นี้เพื่อพัฒนาศักยภาพตนเอง ศักยภาพของทีม และแลกเปลี่ยนเรียนรู้กับเพื่อนที่ต้องการเปลี่ยนแปลงสังคมไปด้วยกัน',
  },
  {
    question: 'ทำงานแล้วเข้าร่วมได้ไหม ?',
    answer: 'เข้าร่วมได้',
  },
  {
    question: 'ถ้าเป็นนักเรียน ต้องมีครูที่ปรึกษาไหม ?',
    answer: 'ไม่จำเป็น',
  },
  {
    question: 'ส่งใบสมัครหลังจากหมดเขตได้ไหม ?',
    answer: 'ใบสมัครที่ส่งมาหลังหมดเขตจะไม่ได้รับการพิจารณา',
  },
  {
    question: 'ต้องเสียค่าใช้จ่ายอะไรไหม ?',
    answer:
      'ผู้สมัครรับผิดชอบค่าใช้จ่ายในการเดินทางมาสัมภาษณ์ เมื่อผ่านการคัดเลือกแล้วเครือข่ายนวัตกรรมคนรุ่นใหม่จะสนับสนุนค่าเดินทางและค่าใช้จ่ายตลอดการเข้าร่วมกิจกรรม',
  },
];

export default FAQ;
