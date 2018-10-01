import { Component, OnInit, Input } from '@angular/core';
import { NguCarousel } from '@ngu/carousel';

@Component({
  selector: 'app-portfolio-carousel',
  templateUrl: './portfolio-carousel.component.html',
  styleUrls: ['./portfolio-carousel.component.scss']
})
export class PortfolioCarouselComponent implements OnInit {
  
  public carouselOptions: NguCarousel;
  public portfolios = [{
    photo: 'assets/images/mgh.jpg',
    text: `麻省总医院有200多年的历史，是哈佛大学医学院建立最早，规模最大的教学医院，
    也是全美历史最悠久的三所综合医院之一，至今已产生13位诺贝尔奖得主。
    麻省总院拥有全球闻名的多科临床和研究中心，
    其所属癌症中心，心脏中心，消化中心，移植中心和神经血管中心汇集了众多知名专家。
    麻省总院每年连续被评为全美最佳医院，是世界公认的顶级医院。`,
    title: '麻省总医院',
    title_e: 'Massachusetts General Hospital, MGH',
  }, {
    photo: 'assets/images/bch.jpg',
    text: `波士顿儿童医院是全球最好、美国最大的儿童医院，
    历年全美儿童医院综合排名第一。小儿癌症历年稳居全美第一。
    此外，在儿童心脏、儿童神经、儿童骨科、儿童内分泌、儿童泌尿、儿童肺科等领域也稳居全美前两位。 
    波士顿儿童医院始于1869年，一家非盈利医疗机构。
    140年以来，一直在为儿童疾病的治疗而努力，从1947年首次成功缓解白血病到最近的复杂胎儿心脏缺陷的矫正，建树颇多。
    `,
    title: '波士顿儿童医院',
    title_e: 'Boston Children Hospital',
  }, {
    photo: 'assets/images/bwh.jpg',
    text: `布列根和妇女医院布列根和妇女医院历史悠久，为美国哈佛大学医学院的第二大附属医院，
    由3家哈佛大学医学院附属医院（分别成立于1913年，1914年和1832年）于1980年合并而成。该医院连续多年被评为全美前10名的综合性医院之一，
    是复杂病例的国际知名转诊中心。现拥有150个门诊部，1200多名医生，757张床位。`,
    title: '布列根和妇女医院',
    title_e: 'Brigham and Women’s Hospital',
  }, {
    photo: 'assets/images/dfci.jpg',
    text: `丹娜法伯癌症研究院（哈佛大学医学院教学附属医院）成立于1947年，
    是美国哈佛大学医学院的癌症专科教学附属医院，美国联邦政府指定的综合性癌症治疗中心。 
    在癌症基因定位治疗、癌症免疫治疗、癌症内分泌治疗、癌症生物治疗、癌症疫苗等临床方面世界领先。 
    成人肿瘤的治疗优势全美领先；儿童肿瘤的治疗更是历年全美排名第一。`,
    title: '丹娜法伯癌症研究院',
    title_e: 'Dana-Farber Cancer Institute',
  }, {
    photo: 'assets/images/mee.jpg',
    text: `麻省眼耳医院麻省眼耳医院（哈佛大学医学院附属医院）是治疗眼、耳、鼻、喉、头颈部疾病的专科医院，
    同时也是哈佛大学医学院附属医院，与麻省总医院院区相邻。
    该院于1824年成立，到19世纪末，已发展成为全美公认的耳鼻喉科专科医院。 
    至今，该院凭借在眼、耳、鼻、喉、头颈复杂疾病的治疗优势以及其在医学研究和教育上的杰出贡献获得广泛国际赞誉。`,
    title: '麻省眼耳医院',
    title_e: 'Massachusetts Eye and Ear',
  }, {
    photo: 'assets/images/srn.jpg',
    text: `斯伯丁运动康复医院建与1971年，是哈佛附属教学医院，拥有132张病床，
    1995年来持续被评为最佳医院，服务范围包括中枢神经系统损伤康复，心肺衰竭康复，各类关节疾病康复，及各类假肢适应。`,
    title: '斯伯丁运动康复医院',
    title_e: 'Spaulding Rehabilitation Network',
  }]
  constructor() { }

  ngOnInit() {
    this.carouselOptions = {
      grid: { xs: 1, sm: 2, md: 3, lg: 3, all: 0 },
      slide: 1,
      speed: 400,
      interval: 8000,
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: true
    }
  }

}
