<template>
  <div class="background-container">
    <NavBarComponents />
    <div class="flex justify-center pt-24 md:pt-16 lg:pt-12 xl:pt-10 2xl:pt-8">
      <div class="content-wrapper p-6 rounded-lg">
        <p class="text-center">
          <img class="h-auto max-w-full rounded-lg" src="../assets/KH.png" alt="image description">
        </p>
        <div class="font-bold mt-6 text-xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl text-gray-600 text-center">
          学院社团
        </div>
        <div class="inline-flex items-center justify-center w-full">
          <hr class="w-64 h-px my-8 bg-gray-300 border-0 dark:bg-gray-700">
          <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 left-1/2 dark:text-white dark:bg-gray-900">
            <img src="../assets/MSS.png" style="width: 40px"/>
          </span>
        </div>
        <p class="text-center text-gray-500 dark:text-gray-400">
          Scientia, intelléctĭo, et futúrum
        </p>
        <p class="text-center text-gray-700 dark:text-gray-400">
          知识,理解及未来
        </p>
      </div>
      <ClubsComponents
        :title="seminarTitle"
        :history="seminarHistory"
        :quote="seminarQuote"
        :users="seminarUserList"
      />
      <ClubsComponents
        :title="veritasTitle"
        :history="veritasHistory"
        :quote="veritasQuote"
        :users="veritasUserList"
      />
      <ClubsComponents
        :title="gameDevelopmentDepartmentTitle"
        :history="gameDevelopmentDepartmentHistory"
        :quote="gameDevelopmentDepartmentQuote"
        :users="gameDevelopmentDepartmentUserList"
      />
      <ClubsComponents
        :title="cleaningClearingTitle"
        :history="cleaningClearingHistory"
        :quote="cleaningClearingQuote"
        :users="cleaningClearingUserList"
      />
      <ClubsComponents
        :title="engineeringDepartmentTitle"
        :history="engineeringDepartmentHistory"
        :quote="engineeringDepartmentQuote"
        :users="engineeringDepartmentUserList"
      />
      <ClubsComponents
        :title="gymTrainingDepartmentTitle"
        :history="gymTrainingDepartmentHistory"
        :quote="gymTrainingDepartmentQuote"
        :users="gymTrainingDepartmentUserList"
      />
      <ClubsComponents
        :title="paranormalAffairsDepartmentTitle"
        :history="paranormalAffairsDepartmentHistory"
        :quote="paranormalAffairsDepartmentQuote"
        :users="paranormalAffairsDepartmentUserList"
      />
    </div>
    <FooterComponents class="mt-10"/>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import NavBarComponents from "components/NavBarComponents.vue"
import FooterComponents from "components/FooterComponents.vue"
import ClubsComponents from "components/ClubsComponents.vue"

import RioIcon from '../assets/students/Rio_Icon.webp'
import NoaIcon from '../assets/students/Noa_Icon.webp'
import YuukaIcon from '../assets/students/Yuuka_Icon.webp'
import KoyukiIcon from  '../assets/students/Koyuki_Icon.webp'

import ChihiroIcon from '../assets/students/Chihiro_Camp_Icon.webp'
import HareIcon from '../assets/students/Hare_Camp_Icon.webp'
import KotamaIcon from '../assets/students/Kotama_Camp_Icon.webp'
import MakiIcon from '../assets/students/Maki_Camp_Icon.webp'

import YuzuIcon from '../assets/students/Yuzu_Maid_Icon.webp'
import MomoiIcon from '../assets/students/Momoi_Maid_Icon.webp'
import MidoriIcon from '../assets/students/Midori_Maid_Icon.webp'
import AliceIcon from '../assets/students/Alice_Maid_Icon.webp'

import NeruIcon from '../assets/students/Neru_Icon.webp'
import AkaneIcon from '../assets/students/Akane_Icon.webp'
import KarinIcon from '../assets/students/Karin_Icon.webp'
import AsunaIcon from '../assets/students/Asuna_Icon.webp'
import TokiIcon from '../assets/students/Toki_Icon.webp'

import HimariIcon from '../assets/students/Himari_Icon.webp'
import EimiIcon from '../assets/students/Eimi_Icon.webp'

import SumireIcon from '../assets/students/Sumire_Icon.webp'
import ReiIcon from '../assets/students/Rei_Icon.webp'

import UtahaCheerleaderIcon from '../assets/students/Utaha_Cheerleader_Icon.webp'
import HibikiCheerleaderIcon from '../assets/students/Hibiki_Cheerleader_Icon.webp'
import KotoriCheerleaderIcon from '../assets/students/Kotori_Cheerleader_Icon.webp'


const seminarTitle = '研讨会';
const seminarHistory = '历史上,研讨会(Seminar)是千年科学学院(Millennium Science School)的前身与起源.最初的研讨会是由一群研究人员组成,他们试图解决被称为“千年难题”(Millennium Problems)的多个难题,这些难题被认为是当前技术无法解决的.为了解决这些问题,进行了大量的实验和验证,结果是与研讨会相关的研究机构数量不断增加.最终,这些集体组织形成了千年科学学院,而研讨会则成为其学生会.即使在今天,研讨会仍然在努力解决千年难题';
const seminarQuote = 'Seminar';

const veritasTitle = '真理部';
const veritasHistory = '在千年科学学园中,有一个非常著名的黑客组织,被称为“贝里塔斯”.他们的名字在拉丁语中意为“真理”,顾名思义,俱乐部的目的是防止像研讨会这样单一组织对信息的垄断.除了为了“正义”进行黑客攻击外,他们还进行数据恢复以及提供“解决方案”';
const veritasQuote = 'Veritas';

const gameDevelopmentDepartmentTitle = '游戏开发部';
const gameDevelopmentDepartmentHistory = '以开发(玩)游戏为主要活动的社团,最初只有柚子一人,后来逐渐成长为现在的四人社团';
const gameDevelopmentDepartmentQuote = 'GameDevelopmentDepartment';

const engineeringDepartmentTitle = '工程部';
const engineeringDepartmentHistory = '千年学园中颇为知名的工程部门,拥有着极为出色的机械设备和枪械等的制造、维修和改装能力,是千年科学学园科技能力集中体现';
const engineeringDepartmentQuote = 'EngineeringDepartment';

const paranormalAffairsDepartmentTitle = '超现象特务部';
const paranormalAffairsDepartmentHistory = '由学生会长指名组建的特殊工作部门,主要负责调查跟踪超级AI“十字神名(Decagrammaton)”和它的“预言者”们的线索';
const paranormalAffairsDepartmentQuote = 'ParanormalAffairsDepartment';

const cleaningClearingTitle = 'Cleaning&Clearing';
const cleaningClearingHistory = '简称C&C，也称为女仆部';
const cleaningClearingQuote = 'CleaningClearing';

const gymTrainingDepartmentTitle = '训练部';
const gymTrainingDepartmentHistory = '这个社团由千年科学学园的乙花菫创建,目的是向千年的所有学生展示体育的重要性、益处和乐趣';
const gymTrainingDepartmentQuote = 'GymTrainingDepartment';

const seminarUserList = [
  {
    name: '调月莉音',
    image: RioIcon,
    quote: '',
    description: '会长调月莉音',
    detail:
      '千年科学学院「研讨会」的会长,冷静且精于计算的她,更关注客观事实而非情感.由于性格截然不同,她与日鞠常常意见不合'
  },
  {
    name: '生盐诺亚',
    image: NoaIcon,
    quote: '基沃托斯的忧鬱',
    description: '书记生盐诺亚',
    detail:
      '千年科学学园所属，学生会「研讨会」的书记。\n' +
      '主要负责记录研讨会的决定事项和会议内容，以及千年的学生开发的制品的特别许可的鉴别和注册专利的业务。拥有非常优秀的记忆力，见过听过一次的内容基本能完整默记下来'
  },
  {
    name: '早濑优香',
    image: YuukaIcon,
    quote: '如我所算',
    description: '会计早濑优香',
    detail:
      '千年科学学园所属，学生会【研讨会】的会计。\n' +
      '在充斥着理系学生的千年科学学园里也是首屈一指的数学鬼才，负责管理千年科学学园的预算部分。\n' +
      '特长是弹算盘，在被繁杂的事务缠身的时，有弹算盘冷静下来的习惯'
  },
  {
    name: '黑崎小雪',
    image: KoyukiIcon,
    quote: '哎呀，这算我的错吗……？',
    description: '部员黑崎小雪',
    detail:
      '隶属于千年科学学园学生会“研讨会”的总惹出麻烦的天才少女。\n' +
      '虽然在数学密码的**方面天赋异禀，但自己完全没意识到这一点。另外，由于喜欢那些自己无法控制的、与运气密切相关的因素，用各种方法对自己的运气进行着测试。即便因此吃了不少苦头，但仍然乐在其中'
  }
]

const veritasUserList = [
  {
    name: '各务千寻',
    image: ChihiroIcon,
    quote: '安全性检查从日常做起 ',
    description: '副部长各务千寻',
    detail:
      '隶属于千年科学学园，黑客集团「维利塔斯」的副部长。\n' +
      '是拥有卓越编程能力的黑客，同时是时时刻刻留意能力不乱用的正常人。在聚集了喜欢恶作剧的学生的韦利塔斯里是充满良心的存在，虽然平日一直对社员们灌输“正派的黑客伦理”，但是也是会实施那种一言不发就会潜入现场的行动的人'
  },
  {
    name: '小钩晴',
    image: HareIcon,
    quote: '有急事请DM',
    description: '部门工程师小钩晴',
    detail:
      '千年科学学园所属，黑客集团【真理部】的工程师。\n' +
      '以聪颖的人居多而闻名的千年科学学园里，她也是屈指可数的天才少女。而其中最先进的仪器，也几乎都是由她一手开发出来的。\n' +
      '尽管她实力非凡成果卓越，她也不会有一丁点儿的骄傲自负，是一位十分听话善良的温柔女孩'
  },
  {
    name: '音濑小玉',
    image: KotamaIcon,
    quote: '我一直守望着你',
    description: '部员音濑小玉',
    detail:
      '千年科学学园所属，黑客集团【真理部】的黑客。擅长窃听，是一名喜欢偷听别人的秘密故事的有点奇怪的少女。不擅人际，基本上是对比自己小的一年级学生也会使用敬语的类型。在现实中是个内向寡言的孩子，可在网络上却是滔滔不绝的话匣子'
  },
  {
    name: '小涂真纪',
    image: MakiIcon,
    quote: '最爱街头涂鸦！',
    description: '部员小涂真纪',
    detail:
      '千年科技学园所属，黑客集团「维利塔斯」的部员。热爱涂鸦，维利塔斯社团的徽章也是她的杰作。天性率直，随心所欲，所以常常在行事的时候引起纠纷'
  }
]

const gameDevelopmentDepartmentUserList = [
  {
    name: '花冈柚子',
    image: YuzuIcon,
    quote: '404 Not Found',
    description: '部长花冈柚子',
    detail:
      '非常不擅长与人交往或者聊天，因此几乎不会外出，大半的时间都在游戏开发部房间的置物柜里度过的。喜欢制作和游玩游戏，对游戏的热情绝非随便说说'
  },
  {
    name: '才羽桃井',
    image: MomoiIcon,
    quote: '致力于游戏！',
    description: '编剧才羽桃井',
    detail:
      '千年科学学园游戏开发部的编剧作者。和双胞胎妹妹绿一同在游戏开发部开发真正的游戏，虽然性格开朗的桃井与腼腆的妹妹相性不好，但对游戏热情的意气相投使她们现在的关系变得非常好'
  },
  {
    name: '才羽绿',
    image: MidoriIcon,
    quote: '请告诉我推荐的游戏 ',
    description: '插画家才羽绿',
    detail:
      '千年科学学园游戏开发部的原画家。和双胞胎姐姐桃井一同在游戏开发部开发真正的游戏，虽然性格腼腆的她与开朗的姐姐相性不好，但对游戏热情的意气相投使她们现在的关系变得非常好'
  },
  {
    name: '天童爱丽丝',
    image: AliceIcon,
    quote: '千年游戏开发部的爱丽丝',
    description: '部员天童爱丽丝',
    detail:
      '千年科学学园所属，游戏开发部的部员。在废墟中被发现的谜之少女，包括年龄在内的情报完全未知。现今，成为了与桃井、绿以及柚子三人共同享受游戏的重度发烧友。说话总有些结结巴巴、不自然的地方，那是因为她说的话基本上都是由复古游戏的台词构成的'
  }
]

const cleaningClearingUserList = [
  {
    name: '美甘宁瑠',
    image: NeruIcon,
    quote: '啊啊！？',
    description: '部长美甘宁瑠',
    detail:
      '千年科学学园所属，承包商「C&C」的领头。\n' +
      '乍一看只是在女仆服外面套着特攻衫的不良少女，但实际上是作为千禧年最强战斗能力的代理人。\n' +
      '因此她的代号【零零】，普遍认为是约定胜利的象征'
  },
  {
    name: '一之濑明日奈',
    image: AsunaIcon,
    quote: '为主人提供最好的服务！',
    description: '部员一之濑明日奈',
    detail:
      '千年科学学园所属，秘密组织【C＆C】的特工。代号【01】，是凭借卓越的野性直觉来克服重重难关的老手。虽然在任务中，擅自相信别人而暴露自己的真实身份，把可疑的东西全部弄坏等大量难以理解的行动，但最终还是取得了好的成果'
  },
  {
    name: '角楯花凛',
    image: KarinIcon,
    quote: '绝不让目标逃跑',
    description: '部员角楯花凛',
    detail:
      '千年科学学园所属，秘密组织【C&C】的特工。代号是【02】，担负着后方强大的火力支援职责。虽然看起来为人不拘小节，但实际却是团队中性格最为慎重的人，每天都在为阻止在任务中暴走的明日奈和朱音而操心不已'
  },
  {
    name: '室笠朱音',
    image: AkaneIcon,
    quote: '一杯热红茶的余裕',
    description: '部员室笠朱音',
    detail:
      '千年科学学园所属，秘密组织「C＆C」的特工。代号是「03」，专攻「扫除」的人员。以亲切温柔的形象为武器来潜入敌阵，用炸药把一切打扫得干干净净，因此得到了「扫除专家」的称号'
  },
  {
    name: '飞鸟马时',
    image: TokiIcon,
    quote: '随时待命',
    description: '部员飞鸟马时',
    detail:
      '千年科学学园所属，代号是「04」。\n' +
      '虽然说是C&C所属，之前一直都作为莉音的专属女仆兼保镖活动着，知道时的存在的人并不多。基于高科技兵器与技术战斗的优秀的特工。虽然一直都在单独行动，但其实也有容易感到寂寞的一面'
  }
]

const gymTrainingDepartmentUserList = [
  {
    name: '乙花堇',
    image: SumireIcon,
    quote: '健全的精神寓于健康的身体',
    description: '部长乙花堇',
    detail:
      '千年科技学园所属，训练部部长。经常锻炼的运动系少女。坚信世上一切问题皆可通过肌肉和运动来解决的耿直少女'
  },
  {
    name: '野正丽',
    image: ReiIcon,
    quote: '',
    description: '部员野正丽',
    detail:
      '千年训练部的试用成员.她的前辈们推荐她加入俱乐部以提高棒球水平，但她似乎对堇的无情训练感到后悔...'
  }
]

const engineeringDepartmentUserList = [
  {
    name: '白石歌原',
    image: UtahaCheerleaderIcon,
    quote: '随时接受改造、维修的委托',
    description: '部长白石歌原',
    detail:
      '千年科技学园所属，工程部部长。与名衔相符，她不断的发明着各式各样的机器人。特别是常伴左右的机器人【雷酱】，据说其战斗能力能与PMC的数百台战斗型自律机器人媲美'
  },
  {
    name: '猫冢响',
    image: HibikiCheerleaderIcon,
    quote: '坐而言不如起而行',
    description: '部员猫冢响',
    detail:
      '千年科学学园所属，工程部的部员。\n' +
      '虽然她不善社交，言辞木讷，但与生俱来的拥有出色的工程学天赋，这使得她能发明出许多神奇的玩意儿。她的发明基本毫无缺陷，即使称为杰作也毫不为过，可无一例外的是，其中必定拥有一些奇奇怪怪的功能，这常常让使用的人感到困惑'
  },
  {
    name: '丰见亚都梨',
    image: KotoriCheerleaderIcon,
    quote: '赞叹微波吧！',
    description: '部员丰见亚都梨',
    detail:
      '千年科学学园所属，工程部的部员。一说起物理学和机械的原理就停不下来的爱说话的女孩子。在千年科学学园，一旦发生与机械相关的问题，她就会第一个进行现场解说'
  }
]

const paranormalAffairsDepartmentUserList = [
  {
    name: '明星日鞠',
    image: HimariIcon,
    quote: '千年学院最顶点的超天才清纯系病弱美少女',
    description: '部长明星日鞠',
    detail:
      '千年科学学园所属，黑客集团「真理部」的原部长，现在是特异现象搜查部的部长。\n' +
      '自称超天才病弱美少女黑客，好像是千年史上的仅有3人获得了的「全知」学位的所有者……这是真实的吗，这个学位真的存在吗，这都被一层神秘的面纱所笼罩着。日鞠说，少女正因有着很多秘密才美丽……诸如此类的话。另外，作为实力首屈一指指的天才黑客的同时，她也是一位对一切神秘的事物有着浓厚兴趣的少女'
  },
  {
    name: '和泉元艾米',
    image: EimiIcon,
    quote: '在此输入状态讯息',
    description: '部员和泉元艾米',
    detail:
      '千年科技学园所属，特异现象搜查部的成员。\n' +
      '不苟言笑，难以捉摸的少女。常常毫无缘由的呆立在原处。\n' +
      '唯有在执行研讨会的委托时，比谁都更有效率，迅速的达成任务目标'
  }
]

const handleScroll = () => {
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  showNewSection.value = scrollPosition > 300;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style>
.background-container {
  background-image: url('../assets/5919634997432379839.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content-wrapper {
  width: 66.6667%; /* 2/3 of the current width */
}

@media (min-width: 770px) {
  .content-wrapper {
    background-color: rgba(255, 255, 255, 0.7); /* Add a semi-transparent background for resolutions 768px and above */
    border-bottom: none; /* Hide border-bottom for resolutions 768px and above */
    border: #c9c9c9 1px solid;
  }
}

@media (min-width: 1024px) {
  .content-wrapper {
    width: 66.6667%; /* Adjust for larger screens if needed */
  }
}

@media (max-width: 1023px) {
  .content-wrapper {
    width: 90%; /* Adjust for smaller screens if needed */
  }
}

@media (max-width: 768px) {
  .background-container {
    background-image: none; /* Hide background image for resolutions below 768px */
  }

  .content-wrapper {
    width: 100%; /* Make content-wrapper full width for resolutions below 768px */
    padding-left: 1rem; /* Optional: Add some padding to the sides */
    padding-right: 1rem; /* Optional: Add some padding to the sides */
  }

  .flex {
    padding-left: 0; /* Reset padding */
    padding-right: 0; /* Reset padding */
  }
}

@media (max-width: 768px) {
  h1.text-3xl {
    font-size: 2xl; /* Adjust the font size for smaller screens */
  }

  .flex-col {
    flex-direction: column;
  }

  .text-3xl {
    font-size: 2xl; /* Reduce the font size for resolutions below 768px */
  }

  .text-2xl {
    font-size: xl; /* Reduce the font size for resolutions below 768px */
  }
}

::-webkit-scrollbar {
  display: none;
}

</style>
