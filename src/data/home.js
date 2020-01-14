import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import sysi_logo from '../images/sysi_logo.jpg';
import influencer_logo from '../images/influencer_logo.jpg';
import achieve_logo from '../images/a-chieve_logo.jpg';
import doplus_logo from '../images/doplus_logo.jpg';
import newgeneration_logo from '../images/new-generation_logo.jpg';

export const supports = [
  {
    icon: <FontAwesomeIcon icon={['fad', 'hands-usd']} />,
    title: 'เงินทุน • FUNDING',
    content: (
      <>
        เข้าถึงเงินทุนสําหรับสนับสนุนการทําโครงการไปจนถึงการก่อตั้งองค์กร
        ตั้งแต่ ระดับไม่เกิน 20,000 บาท ไม่เกิน 50,000 บาท และไม่เกิน 650,000
        บาท
      </>
    ),
  },
  {
    icon: <FontAwesomeIcon icon={['fad', 'book-spells']} />,
    title: 'ทักษะ • TRAINING',
    content:
      'พัฒนาความรู้และทักษะที่จําเป็นต่อการพัฒนาตนเอง พัฒนาทีม และพัฒนาโครงการ ไม่ว่า จะเป็นวิธีคิด เครื่องมือ ความรู้ทางสังคม และการบริหารโครงการ',
  },
  {
    icon: <FontAwesomeIcon icon={['fad', 'monitor-heart-rate']} />,
    title: 'ติดตาม • MONITORING',
    content:
      'ลงพื้นที่ติดตามและให้คําปรึกษาแต่ละโครงการ สนับสนุนการเติบโตทั้งระดับบุคคล ระดับทีม และการสร้างผลกระทบของโครงการ',
  },
  {
    icon: <FontAwesomeIcon icon={['fad', 'chart-network']} />,
    title: 'เครือข่าย • NETWORK',
    content:
      'เส้นทางการสร้างการเปลี่ยนแปลงทางสังคม จะไปได้ยาว ถ้าไปด้วยกัน ที่นี่สนับสนุนการเรียนรู้ร่วมกันอย่างเข้มข้นระหว่างเพื่อนร่วมรุ่น',
  },
];

export const levels = [
  styles => ({
    title: 'ระดับเริ่มต้น • Rookie',
    extra: 'เปิดรับสมัครแล้ว ถึง 28 ก.พ. 63',
    content: (
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
    ),
    actions: [
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
    ],
  }),
  styles => ({
    title: 'ระดับกลาง • Semi-Pro',
    content: (
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
    ),
    actions: [
      {
        label: 'อ่านรายละเอียด',
        variant: 'contained',
        component: Link,
        to: '/courses/semi-pro',
      },
    ],
  }),
  styles => ({
    title: 'ระดับใกล้โปร • Turn-Pro',
    content: (
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
    ),
    actions: [
      {
        label: 'อ่านรายละเอียด',
        variant: 'contained',
        component: Link,
        to: '/courses/turn-pro',
      },
    ],
  }),
];

export const doodles = [
  {
    alt: 'doodle A',
    fileName: 'doodle-A',
    label: 'มีศักยภาพและความมุ่งมั่น',
  },
  {
    alt: 'doodle B',
    fileName: 'doodle-B',
    label: 'พร้อมที่จะเรียนรู้ร่วมกับเพื่อนอย่างเข้มข้น',
  },
  {
    alt: 'doodle C',
    fileName: 'doodle-C',
    label: 'แก้ปัญหาตรงจุด และเป็นไปได้',
  },
  {
    alt: 'doodle D',
    fileName: 'doodle-D',
    label: 'สร้างสรรค์ คิดการใหญ่',
  },
  {
    alt: 'doodle E',
    fileName: 'doodle-E',
    label: 'เห็นโอกาสเติบโต สร้างผลกระทบทางสังคมเพิ่ม',
  },
  {
    alt: 'doodle F',
    fileName: 'doodle-F',
    label: 'เกิดผลยั่งยืน กับกลุ่มเป้าหมาย',
  },
];

export const logos = [
  { alt: 'sysi logo', src: sysi_logo },
  { alt: 'influencer logo', src: influencer_logo },
  { alt: 'achieve logo', src: achieve_logo },
  { alt: 'doplus logo', src: doplus_logo },
  { alt: 'new generation logo', src: newgeneration_logo },
];
