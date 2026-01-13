import * as amplitude from "@amplitude/analytics-browser";

let inited = false;

export function initAmp() {
    if (inited) return;
    const key = import.meta.env.PUBLIC_AMPLITUDE_API_KEY;
    if (!key) return;
    amplitude.init(key, undefined, { defaultTracking: true });
    inited = true;
}

export function track(event: string, props: Record<string, any> = {}) {
    amplitude.track(event, props);
}
