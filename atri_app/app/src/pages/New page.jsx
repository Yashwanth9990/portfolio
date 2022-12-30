import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Link } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { useFlex12Cb, useFlex15Cb, useFlex13Cb, useLink1Cb } from "../page-cbs/new page";
import "../page-css/new page.css";
import "../custom/new page";

export default function NewPage() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex12Props = useStore((state)=>state["new page"]["Flex12"]);
const Flex12IoProps = useIoStore((state)=>state["new page"]["Flex12"]);
const Flex12Cb = useFlex12Cb()
const Flex15Props = useStore((state)=>state["new page"]["Flex15"]);
const Flex15IoProps = useIoStore((state)=>state["new page"]["Flex15"]);
const Flex15Cb = useFlex15Cb()
const Flex13Props = useStore((state)=>state["new page"]["Flex13"]);
const Flex13IoProps = useIoStore((state)=>state["new page"]["Flex13"]);
const Flex13Cb = useFlex13Cb()
const Link1Props = useStore((state)=>state["new page"]["Link1"]);
const Link1IoProps = useIoStore((state)=>state["new page"]["Link1"]);
const Link1Cb = useLink1Cb()

  return (<>
  <Flex1 className="p-new page Flex12 bpt" {...Flex12Props} {...Flex12Cb} {...Flex12IoProps}>
<Flex1 className="p-new page Flex13 bpt" {...Flex13Props} {...Flex13Cb} {...Flex13IoProps}/>
<Flex1 className="p-new page Flex15 bpt" {...Flex15Props} {...Flex15Cb} {...Flex15IoProps}>
<Link className="p-new page Link1 bpt" {...Link1Props} {...Link1Cb} {...Link1IoProps}/>
</Flex1>
</Flex1>
  </>);
}
