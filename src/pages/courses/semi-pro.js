import React from 'react';
import Layout from '../../components/Layout';
import Course from '../../templates/Course';
import SEO from '../../components/seo';

const SemiPro = () => (
  <Layout>
    <SEO
      title={'ระดับกลาง • Semi-Pro'}
      description={
        'เหมาะสำหรับกลุ่มที่ต้องการขยับขยายให้สิ่งที่ทำสร้างผลกระทบทางสังคมมากขึ้น จริงจังมากขึ้น ผู้สมัครมีประสบการณ์ในการทำสิ่งนั้นๆ มาก่อนแล้ว'
      }
    />
    <Course
      title={'ระดับกลาง • Semi-Pro'}
      bannerName={'Header_SemiPro'}
      downloads={[
        {
          href:
            'https://docs.google.com/forms/d/e/1FAIpQLSdV33l4c8_FjST-lA0q0rOIIue93_nxOHt7ks1C7RtbKFEY2w/viewform',
          id: 'download-app-form-turn-pro',
          children: 'โหลดใบสมัคร',
          target: '_blank',
          rel: 'noopener',
        },
      ]}
      description={
        <>
          เหมาะสำหรับกลุ่มที่ต้องการขยับขยายให้สิ่งที่ทำสร้างผลกระทบทางสังคมมากขึ้น
          จริงจังมากขึ้น ผู้สมัครมีประสบการณ์ในการทำสิ่งนั้นๆ มาก่อนแล้ว
        </>
      }
      condition={
        <ul>
          <li>อายุระหว่าง 15 - 27 ปี</li>
          <li>จำนวนสมาชิก 2 - 5 คน</li>
          <li>ทุนสนับสนุนไม่เกิน 50,000 บาท</li>
          <li>
            ทำนวัตกรรม / โครงการระหว่าง เดือน พ.ย. 63 - เม.ย. 64 (6 เดือน)
          </li>
          <li>สามารถเข้าร่วมกิจกรรมของโครงการตามตารางได้ทุกครั้ง</li>
        </ul>
      }
      timeline={[
        {
          startDate: { day: 1, month: 'ส.ค. 63' },
          endDate: { day: 9, month: 'ต.ค. 63' },
          title: 'รับสมัคร',
        },
        {
          startDate: { day: 19, month: 'ต.ค. 63' },
          title: 'ประกาศผลรอบใบสมัคร',
        },
        {
          startDate: { day: 24, month: 'ต.ค. 63' },
          endDate: { day: 25 },
          title: 'สัมภาษณ์ตามภาค',
        },
        {
          startDate: { day: 30, month: 'ต.ค. 63' },
          title: 'ประกาศผลรอบสัมภาษณ์',
        },
        {
          startDate: { day: 20, month: 'พ.ย. 63' },
          endDate: { day: 23 },
          title: 'ปฐมนิเทศ',
          description: '4 วัน 3 คืน',
        },
        {
          startDate: { day: 29, month: 'ม.ค. 64' },
          endDate: { day: 31 },
          title: 'Workshop ติดอาวุธ - 1',
          description: '3 วัน 2 คืน',
        },
        {
          startDate: { day: 19, month: 'มี.ค. 64' },
          endDate: { day: 22 },
          title: 'Workshop ติดอาวุธ - 2 และลงพื้นที่เรียนรู้ (Field Trip)',
          description: '4 วัน 3 คืน',
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
  </Layout>
);

export default SemiPro;
