import { useEffect, useRef } from 'react';

import Text from '../Text'
import Center from '../Center'
import { Box } from '@mui/material';

import { qrAnimation, countDown } from '../../utils/qr';


const QRCode = () => {
    const timerRef = useRef();
    const topRef = useRef();
    const rightRef = useRef();
    const bottomRef = useRef();
    const leftRef = useRef();

    useEffect(() => {

        const top = topRef.current;
        const right = rightRef.current;
        const bottom = bottomRef.current;
        const left = leftRef.current;
        const timer = timerRef.current;

        qrAnimation(top, right, bottom, left);
        countDown(timer);
    }, [])

    return (
        <>
            <Center
                m={2}
                className="qr-container"
            >
                <Box className="gray-bg">
                    <Box component="img" src="./qrcode.png" />
                </Box>
                <Box className="side top" ref={topRef} />
                <Box className="side right" ref={rightRef} />
                <Box className="side bottom" ref={bottomRef} />
                <Box className="side left" ref={leftRef} />
            </Center>
            <Text alpha={0.5} fontSize="x-small">
                QR code will be updated in
                <Text component="span" ref={timerRef} alpha={0.5} fontSize="x-small" ml={0.4}>01:19</Text>
            </Text>
        </>
    )
}

export default QRCode;