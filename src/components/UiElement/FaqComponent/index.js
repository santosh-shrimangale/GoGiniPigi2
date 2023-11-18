import Tabs from "../Tabs";

export default function FaqComponent({ faqData }) {
  return (
    <div className="d-flex">
      <Tabs
        verticalTabs
        tabContent={faqData}
        tabClass=""
        navClass="list-unstyled mb-0 border-0"
        navVariant="tabs"
        navItemClass="w-100"
        navLinkClass=" border-0"
      />
    </div>
  );
}
