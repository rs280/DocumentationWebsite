import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl, {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import styles from './styles.module.css';

import {
  HomepageCard as Card,
  HomepageSection as Section,
  ProductCard,
  SocialCard, 
  SwagCard
} from '../components/HomepageComponents';

function HeroBanner() {
  return (
    <div className={styles.hero} id="hero">
      <div className={styles.heroInner}>
        <h1>
          Deepfence Community
        </h1>
      
        <Section title="Open Source is at the core of what we do, trusted by 1,000's of community users." HeadingTag="h3">
          <Card
            title="100% Open Source"
            description="Deepfence open source projects are completely open source. No phone-home, no limits, no hidden features."
          />
          <Card
            title="Multi-Cloud, Multi-Modality"
            description="Deepfence ThreatMapper finds threats hidden in thousands of production platforms - Cloud, Serverless, Containers."
          />
          <Card
            title="Be Part of the Wave"
            description="Across multiple repos, Deepfence projects are amongst the fastest adopted security solutions for cloud-native apps."
          />
        </Section>
      </div>
    </div>
  );
}

function OpenSourceProducts() {
  return (
  <div>
    <Section title="Deepfence Open Source Projects">
      <ProductCard
        title="Deepfence ThreatMapper"
        description="Hunt for threats in production platforms, and rank them based on their risk-of-exploit."
        icon="/img/products/threatmapper.svg"
        gh="deepfence/ThreatMapper"
        docs="/docs/threatmapper"
      />
      <ProductCard
        title="Deepfence SecretScanner"
        description="Find unprotected secrets, tokens and authentication keys in containers and file systems."
        icon="/img/products/secretscanner.svg"
        gh="deepfence/SecretScanner"
        docs="/docs/secretscanner"
      />
      <ProductCard
        title="Deepfence YaraHunter"
        description="Use YARA rules to scan builds, containers and filesystems to find indicators of malware."
        icon="/img/products/yarahunter.svg"
        gh="deepfence/YaraHunter"
        docs="/docs/yarahunter"
      />
      <ProductCard
        title="Deepfence PacketStreamer"
        description="A lightweight packet collector, supporting distributed hosts, clouds and kubernetes."
        icon="/img/products/packetstreamer.svg"
        gh="deepfence/PacketStreamer"
        docs="/docs/packetstreamer"
      />
      <ProductCard
        title="Deepfence FlowMeter"
        description="Employ machine learning techniques to classify network flows based on packet headers."
        icon="/img/products/flowmeter.svg"
        gh="deepfence/FlowMeter"
        docs="/docs/flowmeter"
      />
    </Section>
  </div>
  );
}

function EnterpriseProducts() {
  return (
  <div>
    <Section title="Deepfence Enterprise Products" className="two-cols">
      <ProductCard
        title="Deepfence ThreatStryker"
        description="Observe, correlate, learn, and act to protect your cloud-native applications, across clouds and on-prem locations.  Built on ThreatMapper, ThreatStryker adds runtime telemetry, attack storyboarding, and targetted protection."
        icon="/img/products/threatstryker.svg"
        docs="/docs/threatstryker"
        readmore="https://deepfence.io/threatstryker"
      />
      <ProductCard
        title="Deepfence Cloud"
        description="A self-service portal where you can deploy dedicated, fully-managed ThreatStryker instances.  Empower your teams to secure and protect their cloud-native applications, at scale and across clouds and on-prem locations."
        icon="/img/products/cloud.svg"
        docs="/docs/threatstryker/cloud"
        readmore="https://deepfence.io/cloud/"
      />
    </Section>
</div>
  );
}

function Community() {
  return (
  <div>
    <Section title="Join in the Open-Source Community" className="two-cols">
      <SocialCard />
      <SwagCard />
    </Section>
  </div>
  );
}

export default function HomePage() {
  const {siteConfig, siteMetadata} = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <main>
        <HeroBanner />
        <div className={styles.maincontent}>
          <OpenSourceProducts />
          <EnterpriseProducts />
          <Community />
        </div>
      </main>
    </Layout>
  );
}