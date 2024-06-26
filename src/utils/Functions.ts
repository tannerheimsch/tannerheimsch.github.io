import { configs } from "shared/content/Content";

export const open = (link: string) => window.open(link, "_blank");

export const onResumeOpen = () => {
    window.location.href = configs.common.resume;
};

export const onMailTo = () => {
    open("mailto:" + configs.common.email);
};

export const onSummaryOpen = () => {
    window.location.href = configs.common.courseSummary;
};