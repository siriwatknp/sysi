import React from 'react';
import Layout from '../../components/Layout';
import Course from '../../templates/Course';
import SEO from '../../components/seo';

const Rookie = () => (
  <Layout>
    <SEO
      title={'ระดับเริ่มต้น • Rookie'}
      description={
        'สำหรับผู้ที่มีไอเดียแก้ปัญหาสังคมที่ตนเองพบเจอและอยากจะทดลองทำเพื่อแก้ปัญหานั้นให้ได้ ผู้สมัครอาจจะมีประสบการณ์แก้ปัญหานั้นๆมาบ้างแล้วหรือยังไม่มีประสบการณ์เลยก็ได้'
      }
    />
    <Course
      title={'ระดับเริ่มต้น • Rookie'}
      bannerName={'Header_Rookie'}
      downloads={[]}
      description={
        <>
          สำหรับผู้ที่มีไอเดียแก้ปัญหาสังคมที่ตนเองพบเจอ
          และอยากจะทดลองทำเพื่อแก้ปัญหานั้นให้ได้
          ผู้สมัครอาจจะมีประสบการณ์แก้ปัญหานั้นๆ
          มาบ้างแล้วหรือยังไม่มีประสบการณ์เลยก็ได้
        </>
      }
      condition={
        <ul>
          <li>อายุระหว่าง 15 - 25 ปี</li>
          <li>จำนวนสมาชิก 1 - 3 คน</li>
          <li>ทุนสนับสนุนไม่เกิน 20,000 บาท</li>
          <li>
            ทำนวัตกรรม / โครงการระหว่าง เดือน เม.ย. 63 - ก.ย. 63 (4 เดือน)
          </li>
          <li>สามารถเข้าร่วมกิจกรรมของโครงการตามตารางได้ทุกครั้ง</li>
        </ul>
      }
      timeline={[
        {
          startDate: { day: 15, month: 'ม.ค. 63' },
          endDate: { day: 28, month: 'ก.พ. 63' },
          title: 'รับสมัคร',
          description: <>สำหรับส่งทางไปรษณีย์ หมดเขตวันที่ 24 ก.พ. 63</>,
        },
        {
          startDate: { day: 3, month: 'มี.ค. 63' },
          title: 'ประกาศผลรอบใบสมัคร',
        },
        {
          startDate: { day: 7, month: 'มี.ค. 63' },
          endDate: { day: 8 },
          title: 'สัมภาษณ์ตามภูมิภาค',
        },
        {
          startDate: { day: 11, month: 'มี.ค. 63' },
          title: 'ประกาศผลรอบสัมภาษณ์',
        },
        {
          startDate: { day: 4, month: 'เม.ษ. 63' },
          endDate: { day: 7 },
          title: 'ปฐมนิเทศ (4 วัน 3 คืน)',
        },
        {
          startDate: { day: 5, month: 'มิ.ย. 63' },
          endDate: { day: 7 },
          title: 'Workshop ติดอาวุธ (3 วัน 2 คืน)',
        },
        {
          startDate: { day: 4, month: 'ก.ค. 63' },
          endDate: { day: 5 },
          title: 'ลงพื้นที่เรียนรู้ (Field Trip 2 วัน 1 คืน)',
        },
        {
          startDate: { day: 7, month: 'ส.ค. 63' },
          endDate: { day: 9 },
          title: 'ถอดบทเรียน (3 วัน 2 คืน)',
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
  </Layout>
);

export default Rookie;
