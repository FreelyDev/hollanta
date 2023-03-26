import SectionTitle from 'components/Widgets/SectionTitle';
import MultiLanguageContext from 'context/MultiLanguageContext';
import { useContext, useEffect, useState } from 'react';
import Expand from "react-expand-animated";
import useStyles from './style';
const faqData = [
    {
        quetion : "What can I expect from The Yasha DAO?",
        answer : ["Transparency, safety, education, a helpful community and the ability to bring forward ideas for consideration via the DAO - but most importantly, safety."]
    },
    {
        quetion : "Do I need to enter every pre-TGE event?",
        answer : ["No, feel free to select any projects that appeal to you and what is best for your financial situation. One of the main goals of Yasha is to offer early access to safe, unique DeFi projects; everyone can choose which projects appeal to them the most."]
    },
    {
        quetion : "What is the minimum holding requirement to gain access to pre-TGEs?",
        answer : ["The current minimum holding requirement is 10 million Yasha tokens."]
    },
    {
      quetion : "How do I swap for Yasha?",
      answer : ["The Yasha token can be swapped using ETH on Uniswap", "Yasha token contract address: 0xd75f1f81b69bdd4df8efbb70e9c6f4609009d753"]
    },
    {
      quetion : "I can't be online that much, how do I keep up?",
      answer : ["The two best places to stay up to date with relevant Yasha info and updates are the official Twitter account and/or the pinned messages in the main Telegram.", "Official Yasha Twitter: https://twitter.com/YashaToken", "Official Yasha Telegram: t.me/yasha_dao_official"]
    },
    {
      quetion : "What is a DAO?",
      answer : ["A DAO (Decentralized Autonomous Organization) is an organization controlled by the token holders as a community, and not by any one person or group.", "A DAO provides an honest and fair playing field for everyone involved. If you own Yasha, you are already part of the DAO and have full voting access and rights. In our opinion, this is the ultimate expression of the intent behind blockchain and decentralized finance."]
    },
    {
      quetion : "How do I migrate?",
      answer : ["The Yasha token is live with a V3 smart contract. For anyone who has V1 tokens, please visit our official Telegram group and post a message in the main chat, an admin will always be there to help you out. For anyone who has V2 tokens, the new V3 tokens have been airdropped to you automatically, you may add the new contract address to your wallet.", "V3 contract address: 0xd75f1f81b69bdd4df8efbb70e9c6f4609009d753", "Official Yasha Telegram: t.me/yasha_dao"]
    },
    
]
const Faqs = () => {
  const classes = useStyles();
  const styles = {
    open: { width: "100%" },
    close: { width: "100%" }
  };
  const transitions = ["height", "opacity", "background"];

  const [faqId, setFaqId] = useState(-1);
  const handleClick = (id:number)=>{
      if (faqId !== -1){
          if(faqId === id){
              setFaqId(-1)
          }
          else{
              setFaqId(id)
          }
      }
      else{
          setFaqId(id)
      }
  }
  
  const { langType } = useContext(MultiLanguageContext)
  const [uiText, setUiText] = useState("FAQ'S");

  useEffect(() => {
    const multiText = ["FAQ'S", "常见问题解答", "PREGUNTAS FRECUENTES", "FAQ'S", "अक्सर पूछे जाने वाले प्रश्न", "よくある質問"]
    if(langType === 'en') setUiText(multiText[0]);
    if(langType === 'cn') setUiText(multiText[1]);
    if(langType === 'es') setUiText(multiText[2]);
    if(langType === 'fr') setUiText(multiText[3]);
    if(langType === 'hi') setUiText(multiText[4]);
    if(langType === 'ja') setUiText(multiText[5]);

  }, [langType]);
  return (
    <>
      <div className={`${classes.root}`}>
        <SectionTitle title = {uiText}/>

        <div className={classes.content}>
           

          {faqData.map((d, k)=>(
            <div className={classes.faq_line} key = {k} onClick={()=>{handleClick(k)}}>
              <div className="question">
                <span>#{k + 1}</span>
                <p> {d.quetion}</p>
                <i className="show fas fa-chevron-down" style = {{transform: k === faqId? "rotate(180deg)" : "rotate(0deg)"}}></i>
              </div>
              <Expand
                open={faqId === k}
                duration={300}
                styles={styles}
                transitions={transitions}
              >
                {d.answer.map((e, i)=>(
                  <p className="answer" key ={i}>{e}</p>
                ))}
              </Expand>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Faqs;
