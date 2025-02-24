import { Customersreview } from "@/containers/home/customers-reviews";
import { Edengourmand } from "@/containers/home/eden-gourmand";
import { Edenhealthbonheur } from "@/containers/home/edenhealth-bonheur";
import { Greenbaner } from "@/containers/home/greenbanner";
import { Herobanner } from "@/containers/home/herobanner-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function ConceptPage() {
  return(
    <>
    <Herobanner/>
    <Edenhealthbonheur/>
    <Greenbaner/>
    <Edengourmand/>
    <Customersreview/>
    </>
  );
}
