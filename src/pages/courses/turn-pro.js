import React from 'react';
import Layout from '../../components/Layout';
import Course from '../../templates/Course';
import SEO from '../../components/seo';

const TurnPro = () => (
  <Layout>
    <SEO
      title={'ระดับใกล้โปร • Turn-Pro'}
      description={
        'สำหรับกลุ่มที่ต้องการจริงจังกับการแก้ปัญหาในประเด็นที่ทำและต้องการการสนับสนุนเพื่อสร้างองค์กรของตนเองสำหรับทำงานต่อในระยะยาว สมาชิกในทีมมีประสบการณ์ในการทำงานในประเด็นนั้นๆ มาพอสมควร'
      }
    />
    <Course
      title={'ระดับใกล้โปร • Turn-Pro'}
      bannerName={'Header_TurnPro'}
      downloads={[
        {
          href:
            'https://docs.google.com/forms/d/e/1FAIpQLSeuFGft1zZaiJRSHExaEwdROFtPG4Posaj9pDNL_WgCkaJNCQ/viewform',
          id: 'download-app-form-turn-pro',
          children: 'โหลดใบสมัคร',
          target: '_blank',
          rel: 'noopener',
        },
      ]}
      description={
        <>
          สำหรับกลุ่มที่ต้องการจริงจังกับการแก้ปัญหาในประเด็นที่ทำ
          และต้องการการสนับสนุนเพื่อสร้างองค์กรของตนเองสำหรับทำงานต่อในระยะยาว
          <br />
          สมาชิกในทีมมีประสบการณ์ในการทำงานในประเด็นนั้นๆ มาพอสมควร
        </>
      }
      condition={
        <>
          <ul>
            <li>อายุระหว่าง 20 - 30 ปี</li>
            <li>จำนวนสมาชิก 3 - 5 คน</li>
            <li>ทุนสนับสนุนไม่เกิน 650,000 บาท</li>
            <li>
              ทำนวัตกรรม / โครงการระหว่าง เดือน ก.ค. 63 - เม.ย. 64 (10 เดือน)
            </li>
            <li>สามารถเข้าร่วมกิจกรรมของโครงการตามตารางได้ทุกครั้ง</li>
          </ul>
          <br />
          <p>
            <b>เอกสารสำหรับการสมัครประกอบด้วย</b>
          </p>
          <p>เอกสารที่สามารถ download แบบฟอร์มได้</p>
          <ol>
            <li>ใบสมัคร</li>
            <li>โครงร่างโครงการ (Project Proposal) (ไม่เกิน 40 หน้า A4) </li>
          </ol>
          <p>เอกสารแนบ</p>
          <ol>
            <li>
              ประวัติย่อ (CV) ของผู้สมัครทุกคนในทีมเป็นภาษาไทย ระบุ ทักษะที่มี
              ประวัติการศึกษา ประวัติการทำงาน ผลงาน/ประสบการณ์
            </li>
            <li>แฟ้มสะสมผลงาน (Portfolio) ที่แสดงผลงานที่ผ่านมาของทีม รวมถึงผลลัพธ์ทางสังคมที่ผลงานนั้น ๆ สร้างขึ้น (ไม่จำกัดรูปแบบ)</li>
            <li>วีดีโอนำเสนอโครงการ ไม่เกิน 5 นาที</li>
          </ol>
        </>
      }
      timeline={[
        {
          startDate: { day: 15, month: 'มี.ค. 63' },
          endDate: { day: 30, month: 'เม.ย. 63' },
          title: 'รับสมัคร',
          description: <>สำหรับส่งทางไปรษณีย์ หมดเขตวันที่ 27 เม.ย. 63</>,
        },
        {
          startDate: { day: 15, month: 'พ.ค. 63' },
          title: 'ประกาศผลรอบใบสมัคร',
        },
        {
          startDate: { day: 23, month: 'พ.ค. 63' },
          endDate: { day: 24, month: 'พ.ค. 63' },
          title: 'สัมภาษณ์ที่กรุงเทพ',
        },
        {
          startDate: { day: 27, month: 'มิ.ย. 63' },
          title: 'ประกาศผลรอบสัมภาษณ์',
        },
        {
          startDate: { day: 26, month: 'มิ.ย. 63' },
          endDate: { day: 29 },
          title: 'ปฐมนิเทศ',
          description: '4 วัน 3 คืน',
        },
        {
          startDate: { day: 4, month: 'ก.ย. 63' },
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
          startDate: { day: 5, month: 'มี.ค. 64' },
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
            <li>ทบทวนทฤษฎีการเปลี่ยนแปลง (Create Theory of Change)</li>
            <li>พัฒนาโมเดลธุรกิจ (Develop a Business Model Canvas)</li>
            <li>สร้างวิธีการวัดผลโครงการ (Measure Success)</li>
            <li>
              รู้จักตัวเอง และเรียนรู้การทำงานร่วมกันในทีม (Collaboration and
              Leadership Style)
            </li>
            <li>
              ค้นหารูปแบบองค์กรที่ใช่สำหรับทีมคุณ (Define your Legal Entity:
              NGO, SE, etc.)
            </li>
            <li>จัดการเอกสารและการเงิน (Report and Financial Management)</li>
            <li>
              ทบทวนการเติบโตหลังจบโครงการ (Review Personal Growth and Project
              Outcome)
            </li>
            <li>
              มองเห็นโอกาสในอนาคตสำหรับเส้นทางการทำโครงการเพื่อสังคม (Path for
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

export default TurnPro;
