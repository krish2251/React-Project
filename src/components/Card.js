import { Heading, HStack, Image, Text,Stack} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1238880878.
import "./All.css";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  
  return (<HStack>
    <div className="main_container">
      <Image src={imageSrc} className="image" />
      <div className="discription">
      <Heading as='h6' className="head_text">{title}</Heading>
      <Text className="text">{description}</Text>
      <p className="seeMore">see more <FontAwesomeIcon icon={faArrowRight} size="1x" /></p>
      </div>
    </div>
  </HStack>);
};

export default Card;
