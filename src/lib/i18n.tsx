'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

type Language = 'en' | 'ko';

interface Translations {
    [key: string]: {
        en: string;
        ko: string;
    };
}

const translations: Translations = {
    // Navigation
    'nav.home': { en: 'Home', ko: '홈' },
    'nav.about': { en: 'About', ko: '소개' },
    'nav.services': { en: 'Services', ko: '서비스' },
    'nav.roadmap': { en: 'Roadmap', ko: '로드맵' },
    'nav.contact': { en: 'Contact', ko: '문의' },

    // Hero Section
    'hero.tagline': {
        en: 'In Transparency, We build Trust.',
        ko: '투명함이 곧 신뢰가 되는 곳.'
    },
    'hero.description': {
        en: 'Elevating Transparency. Strengthening Trust. AI-Driven Neutrality for Global Aesthetics.',
        ko: '더 높은 투명성과 더 단단한 신뢰. AI 기반의 중립성으로 글로벌 에스테틱 산업의 미래를 제시합니다.'
    },
    'hero.cta.primary': { en: 'Learn More', ko: '더 알아보기' },
    'hero.cta.secondary': { en: 'Contact Us', ko: '문의하기' },

    // Problem Section
    'problem.title': { en: 'The Challenge', ko: '해결해야 할 문제' },
    'problem.subtitle': {
        en: 'Why the medical aesthetics industry needs a trusted source of truth',
        ko: '미용 의료 산업에 신뢰할 수 있는 정보원이 필요한 이유'
    },
    'problem.1.title': { en: 'Information Asymmetry', ko: '정보 비대칭' },
    'problem.1.desc': {
        en: 'Patients and practitioners face significant gaps in accessing reliable, unbiased information about treatments and devices.',
        ko: '환자와 시술자들은 치료법과 기기에 대한 신뢰할 수 있고 편향되지 않은 정보 접근에 상당한 격차를 경험합니다.'
    },
    'problem.2.title': { en: 'Ad-Driven Information', ko: '광고 중심 정보' },
    'problem.2.desc': {
        en: 'Marketing-heavy content erodes trust and makes it difficult to distinguish genuine clinical evidence from promotional material.',
        ko: '마케팅 중심 콘텐츠가 신뢰를 무너뜨리고 진정한 임상 근거와 홍보 자료를 구분하기 어렵게 만듭니다.'
    },
    'problem.3.title': { en: 'Regulatory Fragmentation', ko: '규제 파편화' },
    'problem.3.desc': {
        en: 'Different standards across regions create confusion and compliance challenges for global stakeholders.',
        ko: '지역별 상이한 기준이 글로벌 이해관계자들에게 혼란과 컴플라이언스 과제를 야기합니다.'
    },
    'problem.4.title': { en: 'Patient Safety Risks', ko: '환자 안전 리스크' },
    'problem.4.desc': {
        en: 'Counterfeit products and gray market distribution pose serious threats to patient safety and outcomes.',
        ko: '가품과 회색시장 유통이 환자 안전과 결과에 심각한 위협을 초래합니다.'
    },

    // Solution Section
    'solution.title': { en: 'Our Approach', ko: '우리의 접근방식' },
    'solution.subtitle': {
        en: 'Building the single source of truth for medical aesthetics',
        ko: '미용 의료의 단일 신뢰 정보원 구축'
    },
    'solution.1.title': { en: 'Complete Ad Exclusion', ko: '광고 완전 배제' },
    'solution.1.desc': {
        en: 'No brand advertising or sponsorships. Pure, unbiased information.',
        ko: '브랜드 광고 및 협찬 없음. 순수하고 편향되지 않은 정보.'
    },
    'solution.2.title': { en: 'AI-Powered Verification', ko: 'AI 기반 검증' },
    'solution.2.desc': {
        en: 'Intelligent data collection, verification, and neutral summarization.',
        ko: '지능형 데이터 수집, 검증, 중립 요약.'
    },
    'solution.3.title': { en: 'Global Regulatory Sync', ko: '글로벌 규제 동기화' },
    'solution.3.desc': {
        en: 'Real-time updates from US FDA, EMA, MFDS, and other major regulators.',
        ko: 'US FDA, EMA, MFDS 등 주요 규제 기관의 실시간 업데이트.'
    },
    'solution.4.title': { en: 'Authenticity Assurance', ko: '정품 인증 보장' },
    'solution.4.desc': {
        en: 'AI-based product authentication and compliance-focused CRM.',
        ko: 'AI 기반 정품 인증 및 컴플라이언스 중심 CRM.'
    },

    // About Page
    'about.title': { en: 'About Coauths', ko: 'Coauths 소개' },
    'about.mission.title': { en: 'Our Mission', ko: '우리의 미션' },
    'about.mission.desc': {
        en: 'In a global medical aesthetics market plagued by information asymmetry, we build a Single Source of Truth that all stakeholders can trust.',
        ko: '정보 비대칭이 극심한 글로벌 미용 의료 시장에서 모든 이해관계자가 신뢰할 수 있는 단일 정보원(Single Source of Truth)을 구축합니다.'
    },
    'about.principles.title': { en: 'Operating Principles', ko: '운영 원칙' },
    'about.principle.1': { en: 'No brand advertising or sponsorships', ko: '브랜드 광고 및 협찬 금지' },
    'about.principle.2': { en: 'No marketing-purpose data utilization', ko: '마케팅 목적 데이터 활용 금지' },
    'about.principle.3': { en: 'Strict compliance with global regulations and AI ethics', ko: '글로벌 규제 및 AI 윤리 기준 엄격 준수' },
    'about.principle.4': { en: 'Transparency in AI decision-making processes', ko: 'AI 판단 과정의 투명성 확보' },

    // About Page Values
    'about.values.neutrality.title': { en: 'Neutrality', ko: '중립성' },
    'about.values.neutrality.desc': {
        en: 'We maintain strict independence from brands and manufacturers to ensure unbiased information delivery.',
        ko: '우리는 편향되지 않은 정보 제공을 위해 브랜드 및 제조사로부터 엄격한 독립성을 유지합니다.'
    },
    'about.values.transparency.title': { en: 'Transparency', ko: '투명성' },
    'about.values.transparency.desc': {
        en: 'Every piece of information we provide is traceable, verifiable, and free from hidden agendas.',
        ko: '제공되는 모든 정보는 출처 추적과 검증이 가능하며 숨겨진 의도가 없습니다.'
    },
    'about.values.compliance.title': { en: 'Compliance', ko: '규제 준수' },
    'about.values.compliance.desc': {
        en: 'We adhere to the highest global regulatory standards and continuously monitor for changes.',
        ko: '최고 수준의 글로벌 규제 표준을 준수하며 변경 사항을 지속적으로 모니터링합니다.'
    },

    // Services Page
    'services.title': { en: 'Our Services', ko: '서비스' },
    'services.aip.title': { en: 'AIP - Aesthetic Intelligence Platform', ko: 'AIP - Aesthetic Intelligence Platform' },
    // 'services.aip.subtitle': Removed
    'services.aip.desc': {
        en: 'RAG-based integration of regulations, brand news, corporate news, financial disclosures, and academic data. Automatic difficulty-level separation for professionals and consumers. Advertisement free platform.',
        ko: '규제, 브랜드 뉴스, 기업 뉴스, 재무 공시 및 학술 데이터의 RAG 기반 통합. 전문가와 소비자를 위한 자동 난이도 분리. 광고 없는 플랫폼.'
    },
    'services.cosmos.title': { en: 'Cosmos - AI Authentication System', ko: 'Cosmos - AI Authentication System' },
    // 'services.cosmos.subtitle': Removed
    'services.cosmos.desc': {
        en: 'Vision scan + NFC/RFID hybrid authentication. Authenticity verification without direct access to manufacturing databases. Automatic alerts and regulatory response support.',
        ko: '비전 스캔 + NFC/RFID 하이브리드 인증. 제조·유통 DB 직접 접근 없이 진위 판별. 정품/가품에 따른 자동 알람 및 규제 대응 지원.'
    },
    'services.crm.title': { en: 'AI CRM - Smart Clinic Management', ko: 'AI CRM - 스마트 클리닉 관리' },
    // 'services.crm.subtitle': Removed
    'services.crm.desc': {
        en: 'AI-powered CRM tailored to your clinic\'s scale and direction. Predict no-shows before they happen, manage VIP appointments, and re-engage patients with personalized promotions based on visit history.',
        ko: '클리닉 규모와 방향성에 맞춘 AI CRM. 노쇼 발생 가능성을 사전에 예측하고, VIP 예약을 관리하며, 방문 이력 기반 맞춤 프로모션으로 고객 이탈을 방지합니다.'
    },

    // Roadmap Page
    'roadmap.title': { en: 'Roadmap', ko: '로드맵' },
    'roadmap.phase1.title': { en: 'Phase 1: Core', ko: '1단계: 코어' },
    'roadmap.phase1.focus': { en: 'Focus Areas', ko: '집중 분야' },
    'roadmap.phase1.item1': { en: 'Botulinum Toxin', ko: '보툴리눔 톡신' },
    'roadmap.phase1.item2': { en: 'HA Fillers', ko: 'HA 필러' },
    'roadmap.phase1.item3': { en: 'Energy-Based Devices', ko: '에너지 기반 장비' },
    'roadmap.phase1.item4': { en: 'Skin Boosters', ko: '스킨부스터' },
    'roadmap.phase1.goal': {
        en: 'Build medical aesthetics core data learning and expertise. Expand to AI-based trust and standards infrastructure platform.',
        ko: '미용 의료 핵심 데이터 학습 및 전문성 확보. AI 기반 신뢰·표준 인프라 플랫폼으로 확장.'
    },

    // Contact Page
    'contact.title': { en: 'Contact Us', ko: '문의하기' },
    'contact.subtitle': {
        en: 'Get in touch with our team',
        ko: '팀에게 연락하세요'
    },
    'contact.form.name': { en: 'Name', ko: '이름' },
    'contact.form.email': { en: 'Email', ko: '이메일' },
    'contact.form.company': { en: 'Company', ko: '회사' },
    'contact.form.message': { en: 'Message', ko: '메시지' },
    'contact.form.submit': { en: 'Send Message', ko: '메시지 보내기' },
    'contact.info.title': { en: 'Company Information', ko: '회사 정보' },

    // Footer
    'footer.copyright': {
        en: '© 2026 Coauths. All rights reserved.',
        ko: '© 2026 Coauths. All rights reserved.'
    },
    'footer.tagline': {
        en: 'In Transparency, We build Trust.',
        ko: '투명함이 곧 신뢰가 되는 곳.'
    },
};

interface I18nContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('en');

    const t = useCallback((key: string): string => {
        const translation = translations[key];
        if (!translation) {
            console.warn(`Translation missing for key: ${key}`);
            return key;
        }
        return translation[language];
    }, [language]);

    return (
        <I18nContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </I18nContext.Provider>
    );
}

export function useTranslation() {
    const context = useContext(I18nContext);
    if (context === undefined) {
        throw new Error('useTranslation must be used within an I18nProvider');
    }
    return context;
}
