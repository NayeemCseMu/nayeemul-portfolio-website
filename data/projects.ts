export type ProjectCategory =
  | "Data Analytics"
  | "Cloud"
  | "Software Engineering"
  | "Academic / Research";

export type ProjectStatus = "Completed" | "In Progress" | "Planned";

export type ProjectTier = "featured" | "supporting" | "archive";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  tier: ProjectTier;
  status: ProjectStatus;
  summary: string;
  heroNote: string;
  problem: string;
  data: string;
  method: string[];
  technologies: string[];
  results: string[];
  businessImpact: string[];
  challenges?: string[];
  learnings?: string[];
  futureImprovements?: string[];
  kpis?: { label: string; value: string }[];
  sqlHighlights?: string[];
  github?: string;
  demo?: string;
  demoLabel?: string;
  demoNote?: string;
  appStore?: string;
  appStoreLabel?: string;
  stars?: number;
};

export const projects: Project[] = [
  {
    slug: "customer-behaviour-analysis",
    title: "Customer Behaviour Analytics",
    category: "Data Analytics",
    tier: "featured",
    status: "Completed",
    summary:
      "An end-to-end analytics project covering ~3,900 retail customers — cleaned and feature-engineered in Python, modeled and queried in PostgreSQL, and surfaced in an interactive Power BI dashboard with live filtering by subscription status, gender, shipping type, and payment method.",
    heroNote: "Python ETL → PostgreSQL → Power BI",
    problem:
      "Retail leadership needed a self-service view of customer behaviour to guide category, pricing, and retention decisions: which products and categories drive revenue and how that varies by segment and location; whether discounts and promotions are actually effective or just eroding margin; how to segment customers into New, Returning, and Loyal tiers and whether loyalty predicts subscription uptake; and what role shipping, payment method, and subscription status play in spend and satisfaction.",
    data:
      "A customer-level purchase dataset of ~3,900 rows, covering customer demographics (age, gender), product and category, purchase amount, location, review rating, subscription status, shipping type, discount usage, previous purchase count, payment method, and stated purchase frequency.",
    method: [
      "Audited the dataset for missing values and found 37 missing entries in review_rating.",
      "Imputed the missing ratings using the median rating within each product category — preserving category-level differences instead of flattening them with a single global median.",
      "Standardized all column names to lowercase for consistent, predictable querying.",
      "Compared discount_applied and promo_code_used, found they carried identical information, and dropped the redundant column.",
      "Engineered an age_group feature (Young Adults, Middle-aged, Adult, Senior) and mapped stated purchase frequency (e.g. \"Weekly\", \"Quarterly\") to a numeric purchase_frequency_days value.",
      "Loaded the cleaned data into PostgreSQL via SQLAlchemy, with credentials handled through a local .env file rather than hardcoded.",
      "Answered 15 business questions directly in SQL, using CTEs, window functions, and aggregates — customer segmentation, category revenue, discount effectiveness, and more.",
      "Built an interactive Power BI dashboard on top of the modeled data with slicers for subscription status, gender, shipping type, and payment method.",
    ],
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "PostgreSQL",
      "SQLAlchemy",
      "SQL",
      "Power BI",
      "Git",
    ],
    kpis: [
      { label: "Customers analyzed", value: "3.9K" },
      { label: "Avg. previous purchases", value: "25.35" },
      { label: "Avg. review rating", value: "3.75 / 5" },
      { label: "Subscriber rate", value: "7.3%" },
    ],
    sqlHighlights: [
      "Segment customers into New, Returning, and Loyal based on previous purchase count.",
      "Compare average purchase amount between Standard and Express shipping.",
      "Do subscribed customers spend more than non-subscribers, in total and on average?",
      "Which product categories generate the highest revenue, and which states drive the most sales?",
      "Which products carry high ratings but low sales — an under-marketed opportunity?",
    ],
    results: [
      "Clothing is the clear revenue leader (~$0.10M), roughly 40–50% larger than the next category, Accessories (~$0.07M), ahead of Footwear (~$0.04M) and Outerwear (~$0.02M).",
      "Only 7.3% of the customer base is subscribed — a low conversion rate against an otherwise high-engagement base (25.35 average previous purchases per customer).",
      "Average satisfaction sits at 3.75 / 5, with category-level rating gaps that a single global average would have hidden — the reason ratings were imputed by category median rather than overall median.",
      "Revenue is fairly evenly distributed across Young Adults, Middle-aged, and Adult segments, with no single age group dominating.",
    ],
    businessImpact: [
      "The low subscriber rate against a high-engagement customer base points to an upsell opportunity worth testing — particularly among the Loyal segment identified in the SQL segmentation query.",
      "Category concentration in Clothing and Accessories suggests inventory and marketing spend could be weighted more deliberately toward proven categories, while investigating why Footwear and Outerwear underperform.",
      "Category-level rating gaps (rather than a flattened average) give merchandising a more accurate signal for where product quality or expectations need attention.",
    ],
    challenges: [
      "Deciding how to impute 37 missing review_rating values without erasing real category-level differences in customer satisfaction.",
      "Catching that discount_applied and promo_code_used were duplicate signals before they distorted any discount-effectiveness analysis.",
    ],
    learnings: [
      "Imputing by group (category median) rather than a single global statistic is a small decision that materially changes what the data can tell you — worth checking on any dataset with meaningful subgroups.",
      "Writing the business questions in SQL first (rather than only in Python) made the eventual Power BI model simpler, since the query logic was already validated.",
    ],
    futureImprovements: [
      "Automate missing-value handling with a reusable, configurable cleaning pipeline.",
      "Add unit tests for the cleaning and feature-engineering functions.",
      "Publish the dashboard to a Power BI workspace with scheduled refresh.",
      "Add a true RFM segmentation once transaction-level (rather than snapshot) data is available.",
      "Add a data validation step (e.g. Great Expectations) before loading to PostgreSQL.",
    ],
    github: "https://github.com/NayeemCseMu/customer-behaviour-analysis",
    demo: "https://app.powerbi.com/links/Hqt2Uzdt_y?ctid=c1e131c8-7164-4dcd-b68c-fbd599c579b4&pbi_source=linkShare&bookmarkGuid=2a590de8-8576-4662-b646-a3cac37f4b9c",
    demoNote: "Dashboard is a Power BI (.pbix) file in the repo — no hosted live version yet.",
  },
  {
    slug: "customer-behaviour-analysis",
    title: "Customer Behaviour Analytics-2",
    category: "Data Analytics",
    tier: "featured",
    status: "Completed",
    summary:
      "An end-to-end analytics project covering ~3,900 retail customers — cleaned and feature-engineered in Python, modeled and queried in PostgreSQL, and surfaced in an interactive Power BI dashboard with live filtering by subscription status, gender, shipping type, and payment method.",
    heroNote: "Python ETL → PostgreSQL → Power BI",
    problem:
      "Retail leadership needed a self-service view of customer behaviour to guide category, pricing, and retention decisions: which products and categories drive revenue and how that varies by segment and location; whether discounts and promotions are actually effective or just eroding margin; how to segment customers into New, Returning, and Loyal tiers and whether loyalty predicts subscription uptake; and what role shipping, payment method, and subscription status play in spend and satisfaction.",
    data:
      "A customer-level purchase dataset of ~3,900 rows, covering customer demographics (age, gender), product and category, purchase amount, location, review rating, subscription status, shipping type, discount usage, previous purchase count, payment method, and stated purchase frequency.",
    method: [
      "Audited the dataset for missing values and found 37 missing entries in review_rating.",
      "Imputed the missing ratings using the median rating within each product category — preserving category-level differences instead of flattening them with a single global median.",
      "Standardized all column names to lowercase for consistent, predictable querying.",
      "Compared discount_applied and promo_code_used, found they carried identical information, and dropped the redundant column.",
      "Engineered an age_group feature (Young Adults, Middle-aged, Adult, Senior) and mapped stated purchase frequency (e.g. \"Weekly\", \"Quarterly\") to a numeric purchase_frequency_days value.",
      "Loaded the cleaned data into PostgreSQL via SQLAlchemy, with credentials handled through a local .env file rather than hardcoded.",
      "Answered 15 business questions directly in SQL, using CTEs, window functions, and aggregates — customer segmentation, category revenue, discount effectiveness, and more.",
      "Built an interactive Power BI dashboard on top of the modeled data with slicers for subscription status, gender, shipping type, and payment method.",
    ],
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "PostgreSQL",
      "SQLAlchemy",
      "SQL",
      "Power BI",
      "Git",
    ],
    kpis: [
      { label: "Customers analyzed", value: "3.9K" },
      { label: "Avg. previous purchases", value: "25.35" },
      { label: "Avg. review rating", value: "3.75 / 5" },
      { label: "Subscriber rate", value: "7.3%" },
    ],
    sqlHighlights: [
      "Segment customers into New, Returning, and Loyal based on previous purchase count.",
      "Compare average purchase amount between Standard and Express shipping.",
      "Do subscribed customers spend more than non-subscribers, in total and on average?",
      "Which product categories generate the highest revenue, and which states drive the most sales?",
      "Which products carry high ratings but low sales — an under-marketed opportunity?",
    ],
    results: [
      "Clothing is the clear revenue leader (~$0.10M), roughly 40–50% larger than the next category, Accessories (~$0.07M), ahead of Footwear (~$0.04M) and Outerwear (~$0.02M).",
      "Only 7.3% of the customer base is subscribed — a low conversion rate against an otherwise high-engagement base (25.35 average previous purchases per customer).",
      "Average satisfaction sits at 3.75 / 5, with category-level rating gaps that a single global average would have hidden — the reason ratings were imputed by category median rather than overall median.",
      "Revenue is fairly evenly distributed across Young Adults, Middle-aged, and Adult segments, with no single age group dominating.",
    ],
    businessImpact: [
      "The low subscriber rate against a high-engagement customer base points to an upsell opportunity worth testing — particularly among the Loyal segment identified in the SQL segmentation query.",
      "Category concentration in Clothing and Accessories suggests inventory and marketing spend could be weighted more deliberately toward proven categories, while investigating why Footwear and Outerwear underperform.",
      "Category-level rating gaps (rather than a flattened average) give merchandising a more accurate signal for where product quality or expectations need attention.",
    ],
    challenges: [
      "Deciding how to impute 37 missing review_rating values without erasing real category-level differences in customer satisfaction.",
      "Catching that discount_applied and promo_code_used were duplicate signals before they distorted any discount-effectiveness analysis.",
    ],
    learnings: [
      "Imputing by group (category median) rather than a single global statistic is a small decision that materially changes what the data can tell you — worth checking on any dataset with meaningful subgroups.",
      "Writing the business questions in SQL first (rather than only in Python) made the eventual Power BI model simpler, since the query logic was already validated.",
    ],
    futureImprovements: [
      "Automate missing-value handling with a reusable, configurable cleaning pipeline.",
      "Add unit tests for the cleaning and feature-engineering functions.",
      "Publish the dashboard to a Power BI workspace with scheduled refresh.",
      "Add a true RFM segmentation once transaction-level (rather than snapshot) data is available.",
      "Add a data validation step (e.g. Great Expectations) before loading to PostgreSQL.",
    ],
    github: "https://github.com/NayeemCseMu/customer-behaviour-analysis",
    demo: "https://app.powerbi.com/links/Hqt2Uzdt_y?ctid=c1e131c8-7164-4dcd-b68c-fbd599c579b4&pbi_source=linkShare&bookmarkGuid=2a590de8-8576-4662-b646-a3cac37f4b9c",
    demoNote: "Dashboard is a Power BI (.pbix) file in the repo — no hosted live version yet.",
  },
  {
    slug: "cloud-analytics-pipeline",
    title: "Cloud Deployment for the Customer Analytics Pipeline",
    category: "Cloud",
    tier: "supporting",
    status: "Planned",
    summary:
      "The natural next step for the Customer Behaviour Analytics project: moving the Python → PostgreSQL → Power BI pipeline off a local machine and onto cloud infrastructure — cloud storage, a managed database, and a hosted dashboard.",
    heroNote: "Cloud extension of the flagship analytics project — planned",
    problem:
      "A data pipeline that only runs locally isn't something a business can rely on. This project applies cloud fundamentals to make the customer analytics pipeline reproducible, scheduled, and accessible without a local environment or a locally-installed Power BI file.",
    data:
      "Same customer behaviour dataset as the Customer Behaviour Analytics project, moved into cloud storage / a managed cloud database rather than a local PostgreSQL instance.",
    method: [
      "Move raw and cleaned datasets into cloud storage.",
      "Stand up a managed cloud database for query-ready data, replacing the local PostgreSQL instance.",
      "Schedule the Python cleaning and feature-engineering steps rather than running them manually.",
      "Publish the dashboard to a hosted Power BI workspace with scheduled refresh, reachable by URL rather than opened as a local .pbix file.",
    ],
    technologies: ["Cloud Storage", "Cloud Database", "ETL/ELT", "Docker"],
    results: ["[Add cloud provider and architecture once implemented]"],
    businessImpact: [
      "A hosted, always-available dashboard removes the dependency on a local machine and a locally-installed Power BI file — the same standard expected of production data systems.",
    ],
    github: "",
    demo: "",
  },
  {
    slug: "whatsapp-clone",
    title: "WhatsApp Clone",
    category: "Software Engineering",
    tier: "featured",
    status: "Completed",
    summary:
      "A messaging application recreated with Flutter for Android and iOS, built to demonstrate real-time data handling, authentication, and clean mobile architecture.",
    heroNote: "Cross-platform messaging app — Flutter",
    problem:
      "Build a cross-platform messaging experience that mirrors the core mechanics of a production chat app: real-time message delivery, authenticated users, and a responsive UI under changing connection states.",
    data:
      "Not applicable — this is an application engineering project rather than a data analysis project. Real-time chat data is generated and synced through Firebase during use.",
    method: [
      "Structured the app around a clean separation between UI, state, and data layers.",
      "Implemented real-time message sync using Firebase's real-time data services.",
      "Handled authentication and user presence.",
      "Built a responsive chat UI that behaves consistently on both Android and iOS.",
    ],
    technologies: ["Flutter", "Dart", "Firebase", "REST APIs"],
    results: [
      "A functioning cross-platform messaging app covering authentication, real-time sync, and chat UI.",
    ],
    businessImpact: [
      "Demonstrates the same real-time data-handling and state-management discipline that data-intensive dashboards and streaming pipelines require — the underlying engineering problem (keeping UI in sync with fast-changing data) is the same one analytics tooling has to solve.",
    ],
    github: "https://github.com/NayeemCseMu/whatsapp-clone",
    demo: "",
    stars: 15,
  },
  {
    slug: "stripe-payment-integration",
    title: "Stripe Payment Integration",
    category: "Software Engineering",
    tier: "supporting",
    status: "Completed",
    summary:
      "A Flutter module implementing Stripe payment processing, covering secure client-side payment flows and API integration.",
    heroNote: "Payments module — Flutter + Stripe",
    problem:
      "Integrate a third-party payment processor into a Flutter application in a way that's secure, handles failure states gracefully, and is reusable across projects.",
    data: "Not applicable — application engineering project.",
    method: [
      "Integrated the Stripe SDK and API into a Flutter application.",
      "Implemented client-side payment flows and error/failure handling.",
      "Structured the module for reuse across different app screens.",
    ],
    technologies: ["Flutter", "Dart", "Stripe API", "REST APIs"],
    results: ["A working, reusable payment integration module."],
    businessImpact: [
      "Payment and billing systems are a common source of transactional data used in revenue analytics — this project reflects hands-on familiarity with how that data is generated at the source.",
    ],
    github: "https://github.com/NayeemCseMu/stripe-payment-method",
    demo: "",
  },
  {
    slug: "flutter-multiple-image-picker",
    title: "Flutter Multiple Image Picker",
    category: "Software Engineering",
    tier: "supporting",
    status: "Completed",
    summary:
      "A reusable Flutter package/module for selecting and uploading multiple images, built for use across production e-commerce apps.",
    heroNote: "Media upload module — Flutter",
    problem:
      "Product listing and profile flows across the multi-vendor apps built at Quomodosoft needed a consistent, reliable way to select and upload multiple images.",
    data: "Not applicable — application engineering project.",
    method: [
      "Built a reusable multi-image selection component.",
      "Handled image compression and upload to backend storage.",
      "Designed the component to be dropped into multiple app flows without rework.",
    ],
    technologies: ["Flutter", "Dart"],
    results: ["A reusable multi-image picker used across several app screens."],
    businessImpact: [
      "Reusable, well-scoped components like this are what keep production codebases maintainable as they scale — a discipline that carries directly into building maintainable data pipelines.",
    ],
    github: "https://github.com/NayeemCseMu/flutter-multiple-image-pick",
    demo: "",
  },
  {
    slug: "shopo-multivendor-ecommerce",
    title: "ShopO",
    category: "Software Engineering",
    tier: "supporting",
    status: "Completed",
    summary:
      "A production-ready Flutter template for multivendor e-commerce, covering catalog browsing, cart, checkout, and order tracking for multiple independent sellers on one shared platform.",
    heroNote: "Multivendor e-commerce app — Flutter",
    problem:
      "Build a multivendor storefront that lets multiple independent sellers list and manage products under one customer-facing app and one shared checkout — the same multi-role e-commerce pattern (customer, seller, delivery) built in production at Quomodosoft.",
    data: "Not applicable — application engineering project.",
    method: [
      "Implemented vendor-scoped product catalogs so each seller's inventory stays isolated while sharing a common storefront UI.",
      "Built cart and checkout flows that handle multi-vendor orders, splitting a single cart across sellers where needed.",
      "Integrated order tracking and status updates for buyers.",
      "Packaged and published the app as a Flutter template on CodeCanyon.",
    ],
    technologies: ["Flutter", "Dart", "REST APIs", "State Management"],
    results: ["Published and actively listed for sale as a Flutter template on CodeCanyon."],
    businessImpact: [
      "Reflects the same multi-role, multi-tenant app architecture (customer, seller, delivery) built professionally at Quomodosoft, packaged here as a standalone reusable template.",
    ],
    github: "",
    demo: "https://codecanyon.net/item/shopo-multivendor-ecommerce-flutter-app/39965496",
    demoLabel: "View on CodeCanyon",
  },
  {
    slug: "unice-app",
    title: "UNICE",
    category: "Software Engineering",
    tier: "supporting",
    status: "Completed",
    summary:
      "A cross-platform introduction and information app for UNICE Lab, built with Flutter and shipped to both the Google Play Store and the Apple App Store.",
    heroNote: "Cross-platform introduction app — Flutter",
    problem:
      "Give UNICE Lab a single cross-platform app to present its work and services to users on both Android and iOS, from one shared codebase.",
    data: "Not applicable — application engineering project.",
    method: [
      "Built a single Flutter codebase targeting both Android and iOS.",
      "Structured the app's content and navigation around UNICE Lab's introduction and information material.",
      "Handled store submission and release on both Google Play and the Apple App Store.",
    ],
    technologies: ["Flutter", "Dart"],
    results: ["Published and live on both the Google Play Store and the Apple App Store."],
    businessImpact: [
      "Demonstrates full release ownership across both major mobile platforms, from build through store approval.",
    ],
    github: "",
    demo: "https://play.google.com/store/apps/details?id=com.unicelab.unice",
    demoLabel: "Google Play",
    appStore: "https://apps.apple.com/us/app/unice/id6463777529",
    appStoreLabel: "App Store",
  },
  {
    slug: "homeco-real-estate",
    title: "HomeCo",
    category: "Software Engineering",
    tier: "supporting",
    status: "Completed",
    summary:
      "A Flutter real estate directory and listing app for browsing, searching, and filtering property listings, packaged as a reusable template.",
    heroNote: "Real estate directory app — Flutter",
    problem:
      "Build a directory-style app for browsing, searching, and filtering real estate listings, packaged for reuse across different real estate businesses.",
    data: "Not applicable — application engineering project.",
    method: [
      "Built listing browse, search, and filter flows for property data.",
      "Implemented a directory-style UI for presenting listing details and media.",
      "Packaged and published the app as a Flutter template on CodeCanyon.",
    ],
    technologies: ["Flutter", "Dart", "REST APIs"],
    results: ["Published and actively listed for sale as a Flutter template on CodeCanyon."],
    businessImpact: [
      "Extends the same catalog browse/search/filter UI patterns used in e-commerce apps to a real estate listing domain.",
    ],
    github: "",
    demo: "https://codecanyon.net/item/homeco-real-estate-directory-listing-flutter-app/46302077",
    demoLabel: "View on CodeCanyon",
  },
  {
    slug: "ecoshop-multivendor",
    title: "EcoShop",
    category: "Software Engineering",
    tier: "supporting",
    status: "Completed",
    summary:
      "A multivendor Flutter app for food and grocery e-commerce, with an accompanying admin panel for managing vendors, products, and orders.",
    heroNote: "Multivendor food & grocery app — Flutter",
    problem:
      "Extend the multivendor e-commerce pattern to food and grocery — a domain with added constraints around perishability and delivery-time sensitivity — with an admin panel for operational control.",
    data: "Not applicable — application engineering project.",
    method: [
      "Built vendor-scoped catalogs for food and grocery items.",
      "Implemented cart, checkout, and order flows suited to grocery and food ordering.",
      "Built an accompanying admin panel for managing vendors, products, and orders.",
      "Packaged and published the app and admin panel as a Flutter template on CodeCanyon.",
    ],
    technologies: ["Flutter", "Dart", "REST APIs", "Admin Panel"],
    results: [
      "Published and actively listed for sale as a Flutter template with admin panel on CodeCanyon.",
    ],
    businessImpact: [
      "Shows the same multivendor architecture applied to a second domain (food/grocery), including the admin-side management layer, not just the buyer-facing app.",
    ],
    github: "",
    demo: "https://codecanyon.net/item/ecoshop-multivendor-food-grocery-ecommerce-flutter-app-admin-panel/42078956",
    demoLabel: "View on CodeCanyon",
  },
  {
    slug: "mollet-finance-ui-kit",
    title: "Mollet",
    category: "Software Engineering",
    tier: "supporting",
    status: "Completed",
    summary:
      "A Flutter UI kit for finance mobile apps — screens and components for balances, transactions, transfers, and account management.",
    heroNote: "Finance app UI kit — Flutter",
    problem:
      "Provide a ready-made, polished UI kit covering the screens most finance apps need — balance overview, transaction history, transfers, account — without backend logic attached.",
    data: "Not applicable — application engineering project.",
    method: [
      "Designed and built a full set of finance app screens in Flutter: balance overview, transaction history, transfers, and account.",
      "Structured components for reuse and easy theming across different finance app UIs.",
    ],
    technologies: ["Flutter", "Dart"],
    results: ["A reusable finance app UI kit published on GitHub."],
    businessImpact: [
      "UI kits like this let an engineering team stand up a new app's front end quickly — the same reusable-component discipline behind the Flutter multi-image picker module.",
    ],
    github: "https://github.com/NayeemCseMu/finance",
    demo: "",
  },
  {
    slug: "onboarding-screen-flutter",
    title: "Onboarding Screen (Flutter)",
    category: "Software Engineering",
    tier: "archive",
    status: "Completed",
    summary: "A polished, animated onboarding flow implementation for Flutter apps.",
    heroNote: "UI component — Flutter",
    problem:
      "Give new users a clear, well-designed first impression of an app through a multi-step onboarding sequence.",
    data: "Not applicable — application engineering project.",
    method: [
      "Implemented a multi-step onboarding flow with smooth transitions.",
      "Built the component to be configurable for different apps and content.",
    ],
    technologies: ["Flutter", "Dart"],
    results: ["A reusable onboarding UI component."],
    businessImpact: [
      "Demonstrates attention to UI/UX detail — the same care that makes a dashboard or report genuinely usable rather than just technically correct.",
    ],
    github: "https://github.com/NayeemCseMu/onboarding-screen-flutter",
    demo: "",
  },
  {
    slug: "walpie-wallpapers",
    title: "Walpie",
    category: "Software Engineering",
    tier: "archive",
    status: "Completed",
    summary: "A Flutter wallpaper collection and gallery app, published to the Google Play Store.",
    heroNote: "Wallpaper gallery app — Flutter",
    problem:
      "Build a lightweight, browsable wallpaper gallery app with categories and a smooth media-heavy scrolling experience.",
    data: "Not applicable — application engineering project.",
    method: [
      "Built a categorized, image-heavy gallery UI with efficient image loading.",
      "Implemented wallpaper preview and set/download functionality.",
      "Published and released the app on the Google Play Store.",
    ],
    technologies: ["Flutter", "Dart"],
    results: ["Published and live on the Google Play Store."],
    businessImpact: [
      "Media-heavy list and gallery performance work — the same image-loading and scroll-performance discipline any data- or media-dense UI needs.",
    ],
    github: "",
    demo: "https://play.google.com/store/apps/details?id=com.jibdara.app.walpie",
    demoLabel: "Google Play",
  },
  {
    slug: "artsicraft-app",
    title: "Artsicraft",
    category: "Software Engineering",
    tier: "archive",
    status: "Completed",
    summary: "A Flutter app for browsing and showcasing crafts products, published to the Google Play Store.",
    heroNote: "Crafts product app — Flutter",
    problem: "Build a product-browsing app for a crafts business, published to the Google Play Store.",
    data: "Not applicable — application engineering project.",
    method: [
      "Built product browsing and detail views for a crafts product catalog.",
      "Published and released the app on the Google Play Store.",
    ],
    technologies: ["Flutter", "Dart"],
    results: ["Published and live on the Google Play Store."],
    businessImpact: [
      "Another shipped, store-approved Flutter release, reinforcing consistent delivery from build to store submission.",
    ],
    github: "",
    demo: "https://play.google.com/store/apps/details?id=com.artsicraft",
    demoLabel: "Google Play",
  },
  {
    slug: "computational-science-research",
    title: "M.Sc. Computational Science Research Project",
    category: "Academic / Research",
    tier: "supporting",
    status: "In Progress",
    summary:
      "Graduate research and coursework at Laurentian University applying computational and numerical methods to model and analyze complex problems.",
    heroNote: "Graduate research — Laurentian University",
    problem: "[Add specific research question / problem statement]",
    data: "[Add dataset or simulation environment used]",
    method: [
      "[Add computational/numerical methods used]",
      "[Add tools and modeling approach]",
    ],
    technologies: ["Python", "Computational Modeling", "Statistics"],
    results: ["[Add research findings once available]"],
    businessImpact: [
      "Graduate-level computational science work strengthens the mathematical and statistical foundation behind analytics — the same rigor applied to the Customer Behaviour Analytics project.",
    ],
    github: "",
    demo: "",
  },
];

export const projectCategories: (ProjectCategory | "All")[] = [
  "All",
  "Data Analytics",
  "Cloud",
  "Software Engineering",
  "Academic / Research",
];

// Maps each category to its CSS custom property (defined in app/globals.css)
// so cards, tabs, and badges can share one consistent, theme-aware accent.
export const categoryColorVar: Record<ProjectCategory, string> = {
  "Data Analytics": "var(--cat-data-analytics)",
  Cloud: "var(--cat-cloud)",
  "Software Engineering": "var(--cat-software-engineering)",
  "Academic / Research": "var(--cat-academic-research)",
};

export function getFeaturedProject(): Project {
  return projects.find((p) => p.slug === "customer-behaviour-analysis")!;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
