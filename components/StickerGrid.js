// components/StickerGrid.js
import { useMemo } from 'react';
import StickerPeel from '@/react-bits/StickerPeel';
import useScreenWidth from '@/hooks/useScreenWidth';

const StickerGrid = () => {
    const screenWidth = useScreenWidth();

    const stickerConfigs = useMemo(() => {
        const baseConfig = {
            peelBackHoverPct: 25,
            peelBackActivePct: 40,
            rotate: 0,
        };

        const stickers = [
            { imageSrc: '/syria-green.png', id: 'syria' },
            { imageSrc: '/egypt-green.png', id: 'egypt' },
            { imageSrc: '/uae-desert.png', id: 'uae' },
            { imageSrc: '/qatar-blue.png', id: 'qatar' },
        ];

        if (screenWidth < 480) {
            return stickers.map((sticker, i) => ({
                ...baseConfig,
                ...sticker,
                width: [40, 50, 45, 48][i],
                rotate: [15, -10, 25, -15][i],
                initialPosition: {
                    x: [85, -90, 70, -20][i],
                    y: [-220, -200, 160, 140][i]
                }
            }));
        } else if (screenWidth < 768) {
            return stickers.map((sticker, i) => ({
                ...baseConfig,
                ...sticker,
                width: [55, 70, 65, 75][i],
                rotate: [12, -8, 20, -12][i],
                initialPosition: {
                    x: [120, -125, 90, -10][i],
                    y: [-280, -240, 180, 160][i]
                }
            }));
        } else if (screenWidth < 1024) {
            return stickers.map((sticker, i) => ({
                ...baseConfig,
                ...sticker,
                width: [75, 80, 85, 90][i],
                rotate: [8, -12, 15, -8][i],
                initialPosition: {
                    x: [280, 120, 250, 80][i],
                    y: [-120, -80, 120, 100][i]
                }
            }));
        } else {
            return stickers.map((sticker, i) => ({
                ...baseConfig,
                ...sticker,
                width: i === 3 ? 105 : 95,
                initialPosition: {
                    x: [578, 578, 478, 685][i],
                    y: [-55, -245, -155, -155][i]
                }
            }));
        }
    }, [screenWidth]);

    return (
        <>
            {stickerConfigs.map((config) => (
                <StickerPeel
                    key={config.id}
                    {...config}
                    shadowIntensity={0.6}
                    lightingIntensity={0.1}
                    className="z-50"
                />
            ))}
        </>
    );
};

export default StickerGrid;