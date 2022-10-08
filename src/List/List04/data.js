import com from 'public/data'

const data = {
  ...com,
  icon: true,
  list:[{
    title:"施術時間",
    cnt: ["30分程度（カウンセリングを除きます）"]
    },{
    title:"通院",
    cnt: ["症状に合わせ、継続的に1ヶ月～3カ月に1度の治療をお勧めしています。",
          "数カ月かけて、複数回行うことでお肌の状態が改善されていきます。"]
    },{
    title:"注意事項",
    cnt: ["特にありません。",
          "治療当日から洗顔、メイク、シャワー、入浴、運動が可能です。",
          "また、効果については個人差があります。"]
    }],
}


export default data