import React from "react";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import Accordions from "../components/Accordion/index";
import AccordionItem from "../components/Accordion/AccordionItem";
import Footer from "../components/Footer";

const Faqs = () => {
  const data = [
    {
      title: "Why is Gutterguard Australia a leader in gutter protection?",
      description:
        "We are the only providers with a BlueScope steel approved mesh. All our accessories are made by BlueScope steel here in Australia, not in a Chinese factory. When you choose genuine Gutterguard Australia product, approved by BlueScope steel, you don’t void your roof’s warranty.",
    },
    {
      title: "How long will my Gutterguard Australia gutter guard last?",
      description:
        "In 30 years, not one of our gutter guard installations have ever been replaced. We have been around for 30 years, no other company can make this claim, which means our products have stood the test of time.",
    },
    {
      title:
        "What materials are used in Gutterguard Australia’s mesh and accessories?",
      description:
        "We use the best quality powdered coated aluminium, which holds its colour for decades, unlike imitations on the market, which will fade after a few years. Our mesh is made from aluminium, which means it doesn’t rust, as a compatible metal with the roof, the metals don’t react. When stainless steel is placed on top of the roof, water running between the two metals causes it react and rust.",
    },
    {
      title: "What is the difference between cheap and good gutter guards?",
      description:
        "Gutterguard Australia uses the best gutter guards which are BlueScope steel approved. The powder coating doesn’t fade, and the quality is the highest standard, meaning your roof does not lose its warranty.",
      description2:
        "The plastic gutter guards you see in hardware stores are cheap and do not protect your roof’s warranty. The plastic fits inside the gutter, the fit is never perfect, which means it collects and traps leaves. The plastic twists in shape over time, leaves build up and become a sponge for water, which gets pushed up into the roof of the house. You void your warranty from BlueScope steel, if it is full of leaves and holding water, it is written in the fine print of the warranty. Gutters which are full of leaves, remain wet 24 hours a day in rainy weather, nice clean gutters don’t void roof warranties.",
      description3:
        "Gutterguard Australia’s mesh connects to the outside of your gutter and is attached to create a ski slope effect. This means the sun will dry leaves and the wind will blow them off the roof, in contrast, plastic gutter guards, cause the leaves to just sit there, after wind and rain.",
    },
    {
      title: "What makes a good gutter guard installer?",
      description:
        "Not only is there a risk to personal safety for the installer, but there is also a risk to your home, if your gutter guard is not installed properly. ",
    },
    {
      title:
        "Do Gutterguard Australia’s mesh and accessories fit different size gutters?",
      description:
        "Gutterguard Australia’s has the full manufacturers' range of screws, trims and saddles. We have the mesh and accessories that are compatible with your roof.",
    },
    {
      title: "Will gutter guards effect the appearance of my roof?",
      description:
        "When you install a gutter guard, it is not visible from street level, it takes a trained eye to see them installed from the ground. If you purchase an imitation mesh without the quality powdered coating, it will become more visible in a few years, as the colours start to fade. If appearances matter, make sure you purchase from Gutterguard Australia. We have materials to blend colours. Our mesh, saddles and screws can be matched to your unique roof.",
      description2:
        "If you have a split-level home, you may be concerned about the appearance from above, this is when a neat installer, like the team at Gutterguard Australia, make a difference. A good installer has attention to detail, they are not rushing your installation.",
      description3:
        "Many installers cut corners. To save time, they might wrap the mesh over a roof’s hips and barges, while our team tuck it underneath. If you have a multistorey split-level home, make sure you work with quality installers.",
    },
    {
      title:
        "How do Gutterguard Australia’s gutters perform in extreme weather, heat, storms, fire, wind, ice and snow?",
      description:
        "We have three decades of experience of Gutterguard Australia’s gutters standing up to extremes of Australian weather. Our gutter guards are resilient in torrential rain. Homes with big down pipes and gutters, are best equipped to manage large volumes of rain.",
      description2:
        "Our gutter guards stand up to bushfire conditions, the mesh has zero flammability. It passes all bushfire attack levels requirements set by the CSIRO. To find out the bushfire attack levels, contact your local council, who will provide you with a BAL level, which determines if you need an ember mesh. Ember mesh with a minimum of 2mm aperture, is also effective at keeping fine particles, such as pine needles, out of the gutters.",
      description3:
        "When homes without gutter guards are exposed to excessive snow downfall, the weight of the snow can rip away the gutters and home facias. Gutter guards protect your home in the case of excessive down falls, it makes your gutters stronger, because it fixes the gutter to the roof.  When gutters fill up with water, ice and snow, they will sag.",
      description4:
        "Your gutter guard is designed to stand up to extreme heat, they are designed to withstand fires, so excessive sunshine has no impact.",
    },
    {
      title: "Do gutter guards improve the value of my home?",
      description:
        "Gutter guards add value, strengthen gutters and cuts down maintenance costs, helping with insurance claims. Over the years, gutter guards protect the structural integrity of the house, protecting the house from damage that will significantly reduce the house’s resale value.",
    },
    {
      title: "Do gutter guards improve the quality of drinking rainwater?",
      description:
        "Lots of country homes in Australia, collect and drink rainwater. Gutter guards are stage one filtration, of three required filtration stages, gutter, tank and in the home. Gutter guards stop rats, birds and snakes, infecting your drinking water. Gutter guards will stop pests getting into roof, pooping and nesting, and destroying the water’s drinking quality.",
    },
    {
      title: "Can my gutter guards get damaged?",
      description:
        "It is rare, but gutter guards can get damaged from hail or falling trees. When this happens, gutter guards can require repairs. When the gutter guard is damaged, typically the gutter and roof have been damaged at the same time. It is a simple task to replace the damage, we simply cut and replace a 2 to 5 metre strip.",
    },
    {
      title:
        "What happens if I don’t get gutter guards and keep my gutters clean?",
      description:
        "Gutters are out of sight and out of mind, people don’t think about their gutters and unfortunately many people act too late. Many people reach out to us after the damage is done and the house is full of mould. We encourage people to be educated about their gutters. Acting too late is expensive, it can be a couple of thousand minimum. A leak in bedroom is a $2,000 to $3,000 bill, requiring replacement by gyprock and a painter. In some towns, only 1% of houses have gutter guards, you can see leaves banked up on the roof and gutters, sagging away from the house, and in extreme cases you can see where the houses are structurally damaged.",
    },
    {
      title:
        "Do I still need to maintain my gutters, after getting gutter guard installed?",
      description:
        "While gutter guards are designed to keep maintenance to a minimum, there is still a small around required. Time poor people or people not confident working at heights, see a pressing need to install gutter guards. Other people spend the ½ day every 3 to 6 months cleaning their gutters, while the vast majority let their gutters build up leaves. To clean a gutter with gutter guard, requires a minimum amount of maintenance, a quick flush with a hose. Gutter guards will reduce the maintenance by 90%, you can maintain your gutters yourself on a ladder, or get a handy man to help. Gutterguard Australia’s, ski slope design, means the leaves blow away, flushing the gutter guards, keeps them free of moss and seeds.",
    },
  ];
  return (
    <>
      <Header />
      <PageHeader
        backgroundcolor="#203E28"
        textcolor="#E2F2A8"
        heading="FAQs"
      />
      <Accordions>
        {data.map((item, index) => (
          <AccordionItem
            key={index}
            index={index}
            title={item.title}
            description={item?.description}
            description2={item?.description2}
            description3={item?.description3}
            description4={item?.description4}
          />
        ))}
      </Accordions>
      <Footer />
    </>
  );
};

export default Faqs;
