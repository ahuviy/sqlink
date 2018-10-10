export interface Computer {
    brand: string;
    hard_drive: {
        interface: string;
        type: string;
    },
    id: string;
    os: string;
    processor: {
        brand: string;
        model_number: string;
        speed: string;
    },
    ram: string;
    screen: {
        display_type: string;
        resolution: string;
        screen_size: string;
        touch_screen: boolean;
    },
    video_card: string;
}
