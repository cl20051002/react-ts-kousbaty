
import { SceneData, Choice } from "../types";

// ============================================================================
// 深度扩充版剧本 (Deeply Extended Script)
// 包含 10 个阶段：序章 + 7个日常章节 + 2个结局
// ============================================================================

const SCENE_0_PROLOGUE: SceneData = {
  narrative: "【序章：那一夜】\n手机屏幕的光有些刺眼。APP上的订单显示“已接单”，备注是“全套服务，不过夜”。我看着微信支付里刚刚转出去的700元，又抬头看了看面前的302号房门。\n\n这本该是一场充满欲望的交易。我只是太寂寞了，想找个人陪。但真到了门口，听着里面的电视机声，一股巨大的荒谬感和羞耻感突然击中了我。我是个连买春都不敢敲门的懦夫。",
  dialogue: "（钱都付了……可是，我真的要进去吗？如果进去了，我就再也回不去了。）",
  speaker: "内心独白",
  backgroundDescription: "dark hotel hallway, pov looking at door number 302, phone screen glowing in hand showing transaction app, moody cinematic lighting, wong kar wai style, regretful atmosphere",
  choices: [
    { id: "p1", text: "深吸一口气，准备敲门", sentiment: "shy" },
    { id: "p2", text: "羞耻感战胜了欲望，转身逃跑", sentiment: "cold" }
  ],
  isEnding: false
};

const SCENE_1_REUNION: SceneData = {
  narrative: "【第一章：重逢】\n那一夜，我落荒而逃。700块钱打了水漂，我甚至没敢让她退款，直接拉黑删除了所有联系方式。我以为这件事会烂在肚子里。\n\n三个月后。公司楼下的全家便利店。外面下着梅雨。我正等着微波炉热饭团，身边多了一个收伞的人。米色风衣，淡淡的茉莉花香。侧脸重叠的那一刻，我脑子“嗡”的一声。虽然那天只看过APP上的照片，但我死都不会认错。是她。",
  dialogue: "“那个...不好意思，可以帮我拿一下那边的纸巾吗？”",
  speaker: "熟悉的陌生人",
  backgroundDescription: "convenience store interior, rainy window background, girl in beige trench coat shaking umbrella, fluorescent lighting, slice of life anime style, tense atmosphere",
  choices: [
    { id: "c1_1", text: "僵硬地递给她，不敢对视", sentiment: "shy" },
    { id: "c1_2", text: "假装镇定，通过货架倒影偷看她", sentiment: "neutral" },
    { id: "c1_3", text: "恐慌发作，连饭团都没拿就走了", sentiment: "cold" }
  ],
  isEnding: false
};

const SCENE_2_ELEVATOR: SceneData = {
  narrative: "【第二章：狭路】\n命运最爱开玩笑。原来我们不仅在一栋楼，甚至就在楼上楼下。这周我每天像做贼一样避开早高峰，但今天还是撞上了。\n\n电梯里挤满了人。她被人群挤到了角落，刚好贴着我的后背。我能感觉到她的体温，还有那个曾让我产生过下流幻想的香水味。现在这味道只让我觉得如芒在背。",
  dialogue: "“诶？好巧，又是你。你也是在这栋楼上班吗？”",
  speaker: "琳",
  backgroundDescription: "crowded elevator interior, close up perspective, morning light, office workers, awkward tension, anime style, makoto shinkai aesthetic",
  choices: [
    { id: "c2_1", text: "低声回应：“嗯，在12楼。”", sentiment: "shy" },
    { id: "c2_2", text: "含糊其辞，假装在看手机", sentiment: "cold" }
  ],
  isEnding: false
};

const SCENE_3_LUNCH: SceneData = {
  narrative: "【第三章：食堂】\n中午的员工食堂人声鼎沸。我端着餐盘找不到座位，正准备打包，一个人影向我招手。\n\n“这里有人吗？”是琳。她笑得很自然，完全不像是一个会为了700块出卖夜晚的人。她把自己餐盘里没动的辣子鸡拨了一半给我，“我不吃辣，阿姨打多了，别浪费。看你刚才一直盯着这菜。”\n\n那一刻，我产生了一种错觉，仿佛我们是认识很久的同事，而不是买家和卖家。",
  dialogue: "“谢谢……其实我也挺喜欢吃辣的。”",
  speaker: "我",
  backgroundDescription: "busy company cafeteria, bright sunlight streaming through windows, tray with food, girl smiling sitting opposite, slice of life, warm atmosphere",
  choices: [
    { id: "c3_1", text: "心虚地接受她的好意", sentiment: "neutral" },
    { id: "c3_2", text: "试探着问她：“你平时都一个人吃饭吗？”", sentiment: "bold" }
  ],
  isEnding: false
};

const SCENE_4_OVERTIME: SceneData = {
  narrative: "【第四章：加班】\n有了食堂的交集，我们见面的次数多了起来。深夜10点，整栋楼只有我们两层的灯还亮着。我去茶水间倒咖啡，看到她在角落的沙发上睡着了。\n\n电脑屏幕荧光照在她脸上。我看着她，心里五味杂陈。这个白天努力工作、晚上加班的设计师，和那个APP上的账号，真的是同一个人吗？那700块对她来说，意味着什么？",
  dialogue: "（这么睡会着凉的……）",
  speaker: "内心独白",
  backgroundDescription: "dark office pantry, city night lights outside window, girl sleeping on sofa, glowing laptop screen, lonely but gentle vibe, cinematic lighting",
  choices: [
    { id: "c4_1", text: "帮她关掉头顶刺眼的灯", sentiment: "romantic" },
    { id: "c4_2", text: "轻轻把自己的外套盖在她身上", sentiment: "shy" }
  ],
  isEnding: false
};

const SCENE_5_TEAM_DINNER: SceneData = {
  narrative: "【第五章：聚餐】\n楼层联谊会。大家都喝多了。隔壁部门的一个男主管借着酒劲，把手搭在琳的肩膀上，言语轻浮。琳的表情很僵硬，但不敢反抗。\n\n一股无名火冲上我的头顶。那个我都舍不得碰（虽然是因为胆小）的女孩，凭什么被你欺负？我冲过去，一把推开那个男人的手，把琳拉到了身后。",
  dialogue: "“她喝醉了，我送她回去。”",
  speaker: "我",
  backgroundDescription: "noisy izakaya restaurant, blurred background of drinking people, focus on protagonist standing in front of girl, dramatic tension, warm restaurant lighting",
  choices: [
    { id: "c5_1", text: "强硬地带她离开现场", sentiment: "bold" },
    { id: "c5_2", text: "帮她挡下那杯酒，一饮而尽", sentiment: "heroic" }
  ],
  isEnding: false
};

const SCENE_6_WEEKEND: SceneData = {
  narrative: "【第六章：周末】\n那次聚餐后，我们的关系发生了微妙的变化。周六下午，她约我去逛宜家，说是想买个书架搬不动。\n\n我们像真正的情侣一样，讨论着窗帘的颜色，在样板间里打闹。看着她在厨房样板间里假装做饭的背影，我几乎要忘记那个“700元”的诅咒了。但我知道，那个秘密像个定时炸弹，滴答作响。",
  dialogue: "“你看这个沙发，是不是很适合两个人窝着看电影？”",
  speaker: "琳",
  backgroundDescription: "ikea showroom interior, bright soft lighting, couple looking at furniture, happy domestic atmosphere, fake window light, romantic vibe",
  choices: [
    { id: "c6_1", text: "苦涩地笑：“是啊，很适合。”", sentiment: "sad" },
    { id: "c6_2", text: "不敢接话，转移话题去买热狗", sentiment: "shy" }
  ],
  isEnding: false
};

const SCENE_7_RAIN_WALK: SceneData = {
  narrative: "【第七章：雨夜】\n快乐是短暂的，审判终会来临。又是下雨天，我送她回家的路上。雨很大，伞很小，我们紧紧挨在一起。\n\n走到一半，她突然停下了。路边是一家快捷酒店——正好是三个月前那一家的连锁店。她盯着那个招牌看了很久，突然转过头，眼神里没有了平时的温柔，只有一种看透一切的锐利。",
  dialogue: "“你知道吗？我其实记性很好。尤其是对那些……差点发生的事情。”",
  speaker: "琳",
  backgroundDescription: "rainy night street under umbrella, neon reflection on wet ground, serious facial expression, dramatic contrast, anime style",
  choices: [
    { id: "c7_1", text: "心跳漏了一拍，假装听不懂", sentiment: "neutral" },
    { id: "c7_2", text: "预感到来了，停下脚步", sentiment: "sad" }
  ],
  isEnding: false
};

const SCENE_8_CONFRONTATION: SceneData = {
  narrative: "【第八章：对峙】\n她没有带我回家，而是带我去了附近的公园长椅。雨停了，空气冷得刺骨。\n\n她拿出手机，翻出一张截图。那是我那天转账700元的记录，头像和我现在的一模一样。“这三个月，我一直在想你会装到什么时候。”她的声音在颤抖，“花钱约我，却又放我鸽子。然后现在装作好人来接近我。看着我在你面前演戏，你觉得很有趣吗？”",
  dialogue: "“回答我。那晚那个人，是你吗？”",
  speaker: "琳",
  backgroundDescription: "park bench at night, cold street light, girl holding phone showing screen, crying angry expression, emotional climax, cinematic shot",
  choices: [
    { id: "c8_1", text: "【坦白】是我。我那天到了门口，但我没敢进去。", sentiment: "bold" },
    { id: "c8_2", text: "【否认】你认错人了，这只是巧合。", sentiment: "cold" }
  ],
  isEnding: false
};

const SCENE_ENDING_GOOD: SceneData = {
  narrative: "【结局：救赎】\n我跪坐在地上，把那一夜所有的肮脏、羞耻、胆怯全盘托出。我告诉她，我逃跑不是因为嫌弃，而是因为觉得自己配不上那种交易。这三个月的相处，是我偷来的时光。\n\n许久的沉默后，一件带着体温的外套盖在了我头上。是琳。\n\n“那就用一辈子来还这700块吧，笨蛋。”她带着哭腔的声音传来，“还有，下次约会，不许再去酒店了。”",
  dialogue: "“我们回家吧。”",
  speaker: "琳",
  backgroundDescription: "night park scene, warm embrace, tears and smile, hopeful atmosphere, moon appearing from clouds, romantic visual novel ending art",
  choices: [],
  isEnding: true,
  endingType: "good"
};

const SCENE_ENDING_BAD: SceneData = {
  narrative: "【结局：陌路】\n“怎么可能是我？你疯了吧。”直到最后一刻，我还是选择了像个懦夫一样撒谎。我以为只要死不承认，这一切就可以当做没发生。\n\n琳看着我，眼里的光彻底熄灭了。那是一种比愤怒更可怕的眼神——是鄙视。她收起手机，站起身，把雨伞扔进了垃圾桶。\n\n“钱我不缺了，但信任太贵了，你买不起。”\n\n她走进了夜色里。我依然站在原地，口袋里的手机震动了一下，是微信被拉黑的提示。我终于彻底失去了她。",
  dialogue: "“以后，别再见了。”",
  speaker: "琳",
  backgroundDescription: "lonely figure walking away into darkness, rain starting again, discarded umbrella in foreground, cold blue tones, bad ending art",
  choices: [],
  isEnding: true,
  endingType: "bad"
};

// ============================================================================
// 3. 状态机逻辑 (State Machine Logic)
// ============================================================================

export class LLMService {
  // 0:序章 -> 1:重逢 -> 2:电梯 -> 3:食堂 -> 4:加班 -> 5:聚餐 -> 6:周末 -> 7:雨夜 -> 8:对峙 -> 9:结局
  private currentStage: number = 0;

  async startNewGame(): Promise<SceneData> {
    this.currentStage = 0;
    return SCENE_0_PROLOGUE;
  }

  async nextTurn(history: any[], userChoiceText: string): Promise<SceneData> {
    
    // 模拟思考延迟
    await new Promise(resolve => setTimeout(resolve, 800));

    // 状态流转逻辑
    switch (this.currentStage) {
      case 0: // 序章 -> 重逢
        this.currentStage = 1;
        return SCENE_1_REUNION;
      
      case 1: // 重逢 -> 电梯
        this.currentStage = 2;
        return SCENE_2_ELEVATOR;

      case 2: // 电梯 -> 食堂 (新增)
        this.currentStage = 3;
        return SCENE_3_LUNCH;

      case 3: // 食堂 -> 加班
        this.currentStage = 4;
        return SCENE_4_OVERTIME;

      case 4: // 加班 -> 聚餐 (新增)
        this.currentStage = 5;
        return SCENE_5_TEAM_DINNER;

      case 5: // 聚餐 -> 周末 (新增)
        this.currentStage = 6;
        return SCENE_6_WEEKEND;

      case 6: // 周末 -> 雨夜
        this.currentStage = 7;
        return SCENE_7_RAIN_WALK;

      case 7: // 雨夜 -> 对峙
        this.currentStage = 8;
        return SCENE_8_CONFRONTATION;

      case 8: // 对峙 -> 结局
        if (userChoiceText.includes("坦白") || userChoiceText.includes("是的")) {
          this.currentStage = 9;
          return SCENE_ENDING_GOOD;
        } else {
          this.currentStage = 9;
          return SCENE_ENDING_BAD;
        }

      default:
        return SCENE_0_PROLOGUE;
    }
  }
}

export const llmService = new LLMService();
