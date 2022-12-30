import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Div as Div1 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Flex as Flex2 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Checkbox } from "@atrilabs/react-component-manifests/src/manifests/Checkbox/Checkbox.tsx";
import { Countup } from "@atrilabs/react-component-manifests/src/manifests/CountUp/CountUp.tsx";
import { Dropdown } from "@atrilabs/react-component-manifests/src/manifests/Dropdown/Dropdown.tsx";
import { Accordion } from "@atrilabs/react-component-manifests/src/manifests/Accordion/Accordion.tsx";
import { Cascader } from "@atrilabs/react-component-manifests/src/manifests/Cascader/Cascader.tsx";
import { UnorderedList as UnorderedList1 } from "@atrilabs/react-component-manifests/src/manifests/UnorderedList/UnorderedList.tsx";
import { Overlay as Overlay1 } from "@atrilabs/react-component-manifests/src/manifests/Overlay/Overlay.tsx";
import { VerticalMenu } from "@atrilabs/react-component-manifests/src/manifests/VerticalMenu/VerticalMenu.tsx";
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useDiv1Cb, useFlex30Cb, useFlex31Cb, useFlex75Cb, useFlex81Cb, useFlex88Cb, useDiv4Cb, useDiv3Cb, useTextBox20Cb, useTextBox64Cb, useCheckbox1Cb, useCountup1Cb, useDropdown2Cb, useDropdown3Cb, useAccordion1Cb, useCascader1Cb, useDropdown1Cb, useTextBox19Cb, useTextBox18Cb, useUnorderedList1Cb, useOverlay2Cb, useVerticalMenu2Cb, useCascader2Cb, useImage27Cb, useImage28Cb, useImage29Cb } from "../page-cbs/new";
import "../page-css/new.css";
import "../custom/new";

export default function New() {
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

  const Div1Props = useStore((state)=>state["new"]["Div1"]);
const Div1IoProps = useIoStore((state)=>state["new"]["Div1"]);
const Div1Cb = useDiv1Cb()
const Flex30Props = useStore((state)=>state["new"]["Flex30"]);
const Flex30IoProps = useIoStore((state)=>state["new"]["Flex30"]);
const Flex30Cb = useFlex30Cb()
const Flex31Props = useStore((state)=>state["new"]["Flex31"]);
const Flex31IoProps = useIoStore((state)=>state["new"]["Flex31"]);
const Flex31Cb = useFlex31Cb()
const Flex75Props = useStore((state)=>state["new"]["Flex75"]);
const Flex75IoProps = useIoStore((state)=>state["new"]["Flex75"]);
const Flex75Cb = useFlex75Cb()
const Flex81Props = useStore((state)=>state["new"]["Flex81"]);
const Flex81IoProps = useIoStore((state)=>state["new"]["Flex81"]);
const Flex81Cb = useFlex81Cb()
const Flex88Props = useStore((state)=>state["new"]["Flex88"]);
const Flex88IoProps = useIoStore((state)=>state["new"]["Flex88"]);
const Flex88Cb = useFlex88Cb()
const Div4Props = useStore((state)=>state["new"]["Div4"]);
const Div4IoProps = useIoStore((state)=>state["new"]["Div4"]);
const Div4Cb = useDiv4Cb()
const Div3Props = useStore((state)=>state["new"]["Div3"]);
const Div3IoProps = useIoStore((state)=>state["new"]["Div3"]);
const Div3Cb = useDiv3Cb()
const TextBox20Props = useStore((state)=>state["new"]["TextBox20"]);
const TextBox20IoProps = useIoStore((state)=>state["new"]["TextBox20"]);
const TextBox20Cb = useTextBox20Cb()
const TextBox64Props = useStore((state)=>state["new"]["TextBox64"]);
const TextBox64IoProps = useIoStore((state)=>state["new"]["TextBox64"]);
const TextBox64Cb = useTextBox64Cb()
const Checkbox1Props = useStore((state)=>state["new"]["Checkbox1"]);
const Checkbox1IoProps = useIoStore((state)=>state["new"]["Checkbox1"]);
const Checkbox1Cb = useCheckbox1Cb()
const Countup1Props = useStore((state)=>state["new"]["Countup1"]);
const Countup1IoProps = useIoStore((state)=>state["new"]["Countup1"]);
const Countup1Cb = useCountup1Cb()
const Dropdown2Props = useStore((state)=>state["new"]["Dropdown2"]);
const Dropdown2IoProps = useIoStore((state)=>state["new"]["Dropdown2"]);
const Dropdown2Cb = useDropdown2Cb()
const Dropdown3Props = useStore((state)=>state["new"]["Dropdown3"]);
const Dropdown3IoProps = useIoStore((state)=>state["new"]["Dropdown3"]);
const Dropdown3Cb = useDropdown3Cb()
const Accordion1Props = useStore((state)=>state["new"]["Accordion1"]);
const Accordion1IoProps = useIoStore((state)=>state["new"]["Accordion1"]);
const Accordion1Cb = useAccordion1Cb()
const Cascader1Props = useStore((state)=>state["new"]["Cascader1"]);
const Cascader1IoProps = useIoStore((state)=>state["new"]["Cascader1"]);
const Cascader1Cb = useCascader1Cb()
const Dropdown1Props = useStore((state)=>state["new"]["Dropdown1"]);
const Dropdown1IoProps = useIoStore((state)=>state["new"]["Dropdown1"]);
const Dropdown1Cb = useDropdown1Cb()
const TextBox19Props = useStore((state)=>state["new"]["TextBox19"]);
const TextBox19IoProps = useIoStore((state)=>state["new"]["TextBox19"]);
const TextBox19Cb = useTextBox19Cb()
const TextBox18Props = useStore((state)=>state["new"]["TextBox18"]);
const TextBox18IoProps = useIoStore((state)=>state["new"]["TextBox18"]);
const TextBox18Cb = useTextBox18Cb()
const UnorderedList1Props = useStore((state)=>state["new"]["UnorderedList1"]);
const UnorderedList1IoProps = useIoStore((state)=>state["new"]["UnorderedList1"]);
const UnorderedList1Cb = useUnorderedList1Cb()
const Overlay2Props = useStore((state)=>state["new"]["Overlay2"]);
const Overlay2IoProps = useIoStore((state)=>state["new"]["Overlay2"]);
const Overlay2Cb = useOverlay2Cb()
const VerticalMenu2Props = useStore((state)=>state["new"]["VerticalMenu2"]);
const VerticalMenu2IoProps = useIoStore((state)=>state["new"]["VerticalMenu2"]);
const VerticalMenu2Cb = useVerticalMenu2Cb()
const Cascader2Props = useStore((state)=>state["new"]["Cascader2"]);
const Cascader2IoProps = useIoStore((state)=>state["new"]["Cascader2"]);
const Cascader2Cb = useCascader2Cb()
const Image27Props = useStore((state)=>state["new"]["Image27"]);
const Image27IoProps = useIoStore((state)=>state["new"]["Image27"]);
const Image27Cb = useImage27Cb()
const Image28Props = useStore((state)=>state["new"]["Image28"]);
const Image28IoProps = useIoStore((state)=>state["new"]["Image28"]);
const Image28Cb = useImage28Cb()
const Image29Props = useStore((state)=>state["new"]["Image29"]);
const Image29IoProps = useIoStore((state)=>state["new"]["Image29"]);
const Image29Cb = useImage29Cb()

  return (<>
  <Div1 className="p-new Div1 bpt" {...Div1Props} {...Div1Cb} {...Div1IoProps}>
<Cascader className="p-new Cascader1 bpt" {...Cascader1Props} {...Cascader1Cb} {...Cascader1IoProps}/>
<Dropdown className="p-new Dropdown1 bpt" {...Dropdown1Props} {...Dropdown1Cb} {...Dropdown1IoProps}/>
</Div1>
<Flex2 className="p-new Flex30 bpt" {...Flex30Props} {...Flex30Cb} {...Flex30IoProps}>
<Flex2 className="p-new Flex31 bpt" {...Flex31Props} {...Flex31Cb} {...Flex31IoProps}>
<TextBox1 className="p-new TextBox18 bpt" {...TextBox18Props} {...TextBox18Cb} {...TextBox18IoProps}/>
</Flex2>
<TextBox1 className="p-new TextBox19 bpt" {...TextBox19Props} {...TextBox19Cb} {...TextBox19IoProps}/>
</Flex2>
<TextBox1 className="p-new TextBox20 bpt" {...TextBox20Props} {...TextBox20Cb} {...TextBox20IoProps}/>
<Flex2 className="p-new Flex75 bpt" {...Flex75Props} {...Flex75Cb} {...Flex75IoProps}>
<UnorderedList1 className="p-new UnorderedList1 bpt" {...UnorderedList1Props} {...UnorderedList1Cb} {...UnorderedList1IoProps}/>
</Flex2>
<TextBox1 className="p-new TextBox64 bpt" {...TextBox64Props} {...TextBox64Cb} {...TextBox64IoProps}/>
<Checkbox className="p-new Checkbox1 bpt" {...Checkbox1Props} {...Checkbox1Cb} {...Checkbox1IoProps}/>
<Countup className="p-new Countup1 bpt" {...Countup1Props} {...Countup1Cb} {...Countup1IoProps}/>
<Dropdown className="p-new Dropdown2 bpt" {...Dropdown2Props} {...Dropdown2Cb} {...Dropdown2IoProps}/>
<Dropdown className="p-new Dropdown3 bpt" {...Dropdown3Props} {...Dropdown3Cb} {...Dropdown3IoProps}/>
<Accordion className="p-new Accordion1 bpt" {...Accordion1Props} {...Accordion1Cb} {...Accordion1IoProps}/>
<Flex2 className="p-new Flex81 bpt" {...Flex81Props} {...Flex81Cb} {...Flex81IoProps}>
<Overlay1 className="p-new Overlay2 bpt" {...Overlay2Props} {...Overlay2Cb} {...Overlay2IoProps}/>
<VerticalMenu className="p-new VerticalMenu2 bpt" {...VerticalMenu2Props} {...VerticalMenu2Cb} {...VerticalMenu2IoProps}/>
</Flex2>
<Flex2 className="p-new Flex88 bpt" {...Flex88Props} {...Flex88Cb} {...Flex88IoProps}>
<Cascader className="p-new Cascader2 bpt" {...Cascader2Props} {...Cascader2Cb} {...Cascader2IoProps}/>
</Flex2>
<Div1 className="p-new Div4 bpt" {...Div4Props} {...Div4Cb} {...Div4IoProps}>
<Div1 className="p-new Div3 bpt" {...Div3Props} {...Div3Cb} {...Div3IoProps}>
<Image1 className="p-new Image29 bpt" {...Image29Props} {...Image29Cb} {...Image29IoProps}/>
<Image1 className="p-new Image28 bpt" {...Image28Props} {...Image28Cb} {...Image28IoProps}/>
<Image1 className="p-new Image27 bpt" {...Image27Props} {...Image27Cb} {...Image27IoProps}/>
</Div1>
</Div1>
  </>);
}
