import { StaticImageData } from "next/image";
import icMarkets from "@/public/images/brokers/ic-markets.png";
import pepperstone from "@/public/images/brokers/pepperstone.png";
import xmBroker from "@/public/images/brokers/xm.png";
import fpMarkets from "@/public/images/brokers/fp-markets.png";

export interface Broker {
  image: StaticImageData;
  rating: number;
  title: string;
  aosDelay: number;
  popularity: string;
  availableInIndia: boolean;
  updated: string;
}

export const brokers: Broker[] = [
  {
    title: "IC Markets",
    image: icMarkets,
    rating: 4.8,
    aosDelay: 100,
    popularity: "Very High",
    availableInIndia: true,
    updated: "May 2024"
  },
  {
    title: "Pepperstone",
    image: pepperstone,
    rating: 4.7,
    aosDelay: 200,
    popularity: "High",
    availableInIndia: true,
    updated: "April 2024"
  },
  {
    title: "XM Broker",
    image: xmBroker,
    rating: 4.5,
    aosDelay: 300,
    popularity: "High",
    availableInIndia: false,
    updated: "March 2024"
  },
  {
    title: "FP Markets",
    image: fpMarkets,
    rating: 4.6,
    aosDelay: 400,
    popularity: "Medium",
    availableInIndia: true,
    updated: "April 2024"
  },
];