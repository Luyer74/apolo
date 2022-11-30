import React from 'react';
import { BuzzFeedQuiz } from "react-buzzfeed-quiz";
import "react-buzzfeed-quiz/lib/styles.css";

const Quiz = () => {
  return (
    <BuzzFeedQuiz
    title={"Agradecemos su tiempo."}
    description={"Si no esta seguro de que paquete elegir, este quiz le facilitara la opcion!"}
    generalBackgroundColor={"#2A2D34"}
    autoScroll={true}
    onAnswerSelection={(questionIndex, answerIndex, resultID) =>
      console.log({
        questionIndex,
        answerIndex,
        resultID,
      })
    }

    questions={[
      {
        question: "Cual es la velocidad de subida que necesita?",
        answers: [
          {
            answer: "10-100MB",
            resultID: 0,
          },
          {
            answer: "10-50MB",
            resultID: 1,
          },
          {
            answer: "10-500MB",
            resultID: 2,
          },
        ],
      },

      {
        question: "Cual es la velocidad de descarga que necesita?",
        answers: [
          {
            answer: "100MB",
            resultID: 0,
          },
          {
            answer: "50MB",
            resultID: 1,
          },
          {
            answer: "100-500MB",
            resultID: 2,
          },
        ],
      },

      {
        question: "Cual metodo de Internet necesita?",
        answers: [
          {
            answer: "Satellite o Portobella + Bonding",
            resultID: 0,
            resultID: 0,
          },
          {
            answer: "LinkPro + Bonding",
            resultID: 1,
            resultID: 1,
          },
          {
            answer: "PTP",
            resultID: 2,
            resultID: 2,
          },
        ],
      },

      {
        question: "Cuanto tiempo de disponibilidad tiene para la instalacion?",
        answers: [
          {
            answer: "2-6 Horas",
            resultID: 0,
            resultID: 1,
          },
          {
            answer: "1 Hora",
            resultID: 1,
          },
          {
            answer: "3 Dias habiles",
            resultID: 2,
            resultID: 0,
            resultID: 1,
          },
        ],
      },

      {
        question: "Cual es su rango de precio?",
        answers: [
          {
            answer: "$6,990 - $29,590",
            resultID: 0, 
          },
          {
            answer: "$1000",
            resultID: 1,
          },
          {
            answer: "$6,990 - $85,754",
            resultID: 2,
          },
        ],
      },
      
      
    ]}
    results={[
      {
        title: "Internet Satelital",
        description: "Le recomendamos el paquete internet satelital porque se adapta mejor a su situacion! Aunque tambien puedes personalizar tu paquete si lo deseas!",
        resultID: 0,
      },
      {
        title: "Internet Movil",
        description: "Le recomendamos el paquete internet movil porque se adapta mejor a su situacion! Aunque tambien puedes personalizar tu paquete si lo deseas!",
        resultID: 1,
      },
      {
        title: "Punto a Punto",
        description: "Le recomendamos el paquete punto a punto porque se adapta mejor a su situacion! Aunque tambien puedes personalizar tu paquete si lo deseas!",
        resultID: 2,
      },
    ]}
  />
);
};


export default Quiz;