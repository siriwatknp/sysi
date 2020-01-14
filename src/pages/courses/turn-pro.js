import React from 'react';
import Course from '../../templates/Course';
import SEO from '../../components/seo';

const TurnPro = () => (
  <>
    <SEO
      title={'ระดับใกล้โปร • Turn-Pro'}
      description={
        'สำหรับกลุ่มที่ต้องการจริงจังกับการแก้ปัญหาในประเด็นที่ทำและต้องการการสนับสนุนเพื่อสร้างองค์กรของตนเองสำหรับทำงานต่อในระยะยาว สมาชิกในทีมมีประสบการณ์ในการทำงานในประเด็นนั้นๆ มาพอสมควร'
      }
    />
    <Course
      title={'ระดับใกล้โปร • Turn-Pro'}
      bannerName={'Header_TurnPro'}
      description={
        <>
          สำหรับกลุ่มที่ต้องการจริงจังกับการแก้ปัญหาในประเด็นที่ทำ
          และต้องการการสนับสนุนเพื่อสร้างองค์กรของตนเองสำหรับทำงานต่อในระยะยาว
          <br />
          สมาชิกในทีมมีประสบการณ์ในการทำงานในประเด็นนั้นๆ มาพอสมควร
        </>
      }
      condition={
        <ul>
          <li>อายุระหว่าง 20 - 30 ปี</li>
          <li>จำนวนสมาชิก 3 - 5 คน</li>
          <li>ทุนสนับสนุนไม่เกิน 650,000 บาท</li>
          <li>
            ทำนวัตกรรม / โครงการระหว่าง เดือน ก.ค. 63 - เม.ย. 64 (10 เดือน)
          </li>
          <li>สามารถเข้าร่วมกิจกรรมของโครงการตามตารางได้ทุกครั้ง</li>
        </ul>
      }
      timeline={[
        {
          startDate: { day: 2, month: 'มี.ค. 63' },
          endDate: { day: 30, month: 'เม.ย. 63' },
          title: 'รับสมัคร',
          description: <>สำหรับส่งทางไปรษณีย์ หมดเขตวันที่ 27 เม.ย. 63</>,
        },
        {
          startDate: { day: 8, month: 'พ.ค. 63' },
          title: 'ประกาศผลรอบใบสมัคร',
        },
        {
          startDate: { day: 16, month: 'พ.ค. 63' },
          title: 'สัมภาษณ์ที่กรุงเทพ',
        },
        {
          startDate: { day: 20, month: 'พ.ค. 63' },
          title: 'ประกาศผลรอบสัมภาษณ์',
        },
        {
          startDate: { day: 19, month: 'มิ.ย. 63' },
          endDate: { day: 22 },
          title: 'ปฐมนิเทศ',
          description: '4 วัน 3 คืน',
        },
        {
          startDate: { day: 4, month: 'ก.ย. 64' },
          endDate: { day: 6 },
          title: 'Workshop ติดอาวุธ - 1',
          description: '3 วัน 2 คืน',
        },
        {
          title: 'ลงพื้นที่เรียนรู้ (Field Trip)',
          description: 'ระหว่างเดือน ต.ค. - พ.ย. 63',
        },
        {
          startDate: { day: 11, month: 'ธ.ค. 63' },
          endDate: { day: 13 },
          title: 'Workshop ติดอาวุธ - 2',
          description: '3 วัน 2 คืน',
        },
        {
          startDate: { day: 5, month: 'มี.ค. 63' },
          endDate: { day: 7 },
          title: 'Workshop ติดอาวุธ - 3',
          description: '3 วัน 2 คืน',
        },
        {
          startDate: { day: 14, month: 'พ.ค. 64' },
          endDate: { day: 16 },
          title: 'ถอดบทเรียน',
        },
      ]}
      material={
        <>
          <p>
            <u>เนื้อหาที่เรียนรู้ร่วมกัน</u>
          </p>
          <ul>
            <li>
              เปิดโลกทัศน์จากการเรียนรู้ร่วมกับเพื่อน การดูงาน และกรณีศึกษา
              (Learn from Peers, Field Trips and Case studies)
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
              รู้จักตัวเอง และเรียนรู้การทำงานร่วมกันในทีม (Collaboration and
              Leadership Style)
            </li>
            <li>จัดการเอกสารและการเงิน (Report and Financial Management)</li>
            <li>
              ทบทวนการเติบโตหลังจบโครงการ (Review Personal Growth and Project
              Outcome)
            </li>
            <li>
              มองเห็นโอกาสในอนาคตสำหรับเส้นทางการโครงการเพื่อสังคม (Path for
              Social Innovators)
            </li>
          </ul>
          <p>
            <u>เนื้อหาที่เลือกเรียนตามความสนใจ</u>
          </p>
          <ul>
            <li>วิธีจัดการความขัดแย้ง (Conflict Management)</li>
            <li>
              สร้างการมีส่วนร่วมกับผู้มีส่วนได้ส่วนเสีย (Stakeholders
              Engagement)
            </li>
            <li>
              การสร้างพื้นที่ในการแลกเปลี่ยนและสะท้อนคิด (Facilitator Skills)
            </li>
            <li>นโยบายสำหรับนวัตกรทางสังคม (Policy for Social Innovator)</li>
            <li>วิธีทำงานแบบอะไจล์ (Agile : Fail Fast Move Forward)</li>
            <li>วิธีผลิตไอเดียอย่างสร้างสรรค์ (How to Have Creative Ideas)</li>
            <li>วิธีให้ฟี้ดแบ็คที่สร้างสรรค์ ​(Constructive Feedback)</li>
            <li>เล่าเรื่องให้โดนใจ - พูด (Story Telling - Verbal)</li>
            <li>เล่าเรื่องให้โดนใจ - เขียน (Story Telling - Writing)</li>
            <li>กลยุทธการสื่อสารสาธารณะ (Communication Strategy)</li>
            <li>ขับเคลื่อนด้วยวัฒนธรรมข้อมูล (Data Driven Culture)</li>
            <li>
              เลือกใช้ข้อมูลเพื่อพัฒนาประสิทธิภาพงาน (Basic Data for Efficiency)
            </li>
            <li>
              การบริหารทรัพยากรบุคคล / หาอาสาสมัคร (Manage you Human Resource/
              How to Attract Volunteer)
            </li>
            <li>การหาเงินทุน (Finance your Project)</li>
            <li>และอื่นๆ</li>
          </ul>
        </>
      }
    />
  </>
);

export default TurnPro;
