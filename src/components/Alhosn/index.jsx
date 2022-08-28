import { useState, useLayoutEffect } from 'react';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import RefreshIcon from '@mui/icons-material/Refresh';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CircleIcon from '@mui/icons-material/Circle';

import Text from '../Text'
import Center from '../Center';
import QRCode from './QRCode';

const Vaccin = ({ date, type, border = true }) => (
    <Center mt={1}>
        <Center
            border="2px solid #43b49b"
            width={25}
            height={14}
            borderRadius={2}
            whiteSpace="nowrap"
            mr={1}
            p={1}>
            <Text color="#43b49b" alpha={1}>Sin</Text>
        </Center>
        <Box flexGrow={1}>
            <Text fontWeight="bolder" alpha={0.7}>{date}</Text>
            <Text fontSize="small" alpha={0.5} my={0.7} fontWeight="bold">{type}</Text>
            {border && <Divider />}
        </Box>
    </Center>
);

const PCR = ({ date, border = true }) => (
    <Box mt={1}>
        <Text fontWeight="bolder" alpha={0.7}>{date}</Text>
        <Center justifyContent="flex-start" py={0.4}>
            <CircleIcon sx={{ fontSize: 10, color: "#43b49b", mr: 1 }} />
            <Text fontSize="small" alpha={0.5} fontWeight="bold" my={0.7}> PCR Negative</Text>
        </Center>
        {border && <Divider />}
    </Box>
)

const Alhosn = () => {
    const [height, setHeight] = useState();
    const DAY_CONSTANT = 1000 * 3600 * 24;
    const dateNow = Date.now() / DAY_CONSTANT;
    const date2DaysAgo = new Date((dateNow - 2) * DAY_CONSTANT).toDateString().split(' ');

    const resetHeight = () => setHeight(window.innerHeight);

    useLayoutEffect(() => {
        resetHeight();
        window.addEventListener('resize', resetHeight);
        return () => window.removeEventListener('resize', resetHeight);
    }, []);


    return (
        <Box sx={{
            height,
            bgcolor: '#5ea4ae',
            overflow: 'hidden',
            display: "flex",
            flexDirection: 'column'
        }}>
            <Center
                bgcolor='#5ea4ae'
                justifyContent="space-between"
                p={1}
                color="white"
            >
                <IconButton><ArrowBackIosIcon sx={{ color: "#fff" }} /></IconButton>
                <Text mr={-5} color="#fff" variant='h6'>Green Pass</Text>
                <Center>
                    <IconButton><RefreshIcon sx={{ color: "#fff" }} /></IconButton>
                    <IconButton><MoreVertIcon sx={{ color: "#fff" }} /></IconButton>
                </Center>
            </Center>
            <Box sx={{
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                flexGrow: 1,
                bgcolor: '#edeff7',
                overflow: 'auto'
            }}
            >
                <Center
                    p={1}
                    position="sticky"
                    bgcolor="inherit"
                    zIndex={10}
                    top={0}
                    columnGap={0.5}>
                    <CircleIcon sx={{ fontSize: 10, color: 'rgba(0,0,0,0.4)' }} />
                    <CircleIcon sx={{ fontSize: 10, color: 'rgba(0,0,0,0.2)' }} />
                    <CircleIcon sx={{ fontSize: 10, color: 'rgba(0,0,0,0.2)' }} />
                </Center>
                <Box p={2} pt={0}>
                    <Center
                        height={270}
                        bgcolor="#43b49b"
                        borderRadius={1}
                        position="relative"
                        flexDirection="column"
                        rowGap={0.6}
                    >
                        <Avatar sx={{
                            height: 40,
                            width: 40,
                            top: 20,
                            left: 10,
                            position: 'absolute',
                            bgcolor: 'background.paper',
                        }} src="./logo-nobg.png" />
                        <IconButton disableRipple sx={{
                            bgcolor: 'background.paper',
                            position: 'absolute',
                            top: 20,
                            right: 0,
                            borderRadius: 10,
                            borderTopRightRadius: 0,
                            borderBottomRightRadius: 0,
                            justifyContent: 'flex-start',
                            width: 50
                        }}

                        ><InfoOutlinedIcon /></IconButton>
                        <Avatar sx={{ height: 100, width: 100, mb: 1 }} src="./julius.jpeg" />
                        <Text color="#fff" variant='h6' fontWeight="bold">JULIUS EKANE EKANE</Text>
                        <Box display="flex" alignItems="center" columnGap={0.8}>
                            <Text color="#fff" fontWeight="bold">EID: 784-1995-********-6</Text>
                            <CircleIcon sx={{ fontSize: 5, color: '#fff' }} />
                            <Text color="#fff" fontWeight="bold">PPN: AA22****</Text>
                        </Box>
                        <Text color="#fff" fontWeight="bold">DOB: ***********</Text>
                        <Text color="#ead693" fontWeight="bold" alpha={1}>Covid-19 Vaccinated - 17 Jul 2021</Text>
                    </Center>
                    <Center flexDirection="column" pt={2}>
                        <Text variant='h5' fontWeight="bold" alpha={0.6}>2 days - PCR Negative</Text>
                        <Text fontWeight="bold" alpha={0.5}>Since {date2DaysAgo[2]} {date2DaysAgo[1]} {date2DaysAgo[3]}</Text>
                        <QRCode />
                    </Center>
                    <Paper sx={{ p: 2, mt: 1.5 }}>
                        <Text alpha={0.5}>For medical use only</Text>
                        <Stack mt={1}>
                            <Vaccin
                                date="1st Dose - 25 Jun 2021"
                                type="Sinopharm - DOH - Via Medica International"
                            />
                            <Vaccin
                                date="2nd Dose - 17 Jul 2021"
                                type="Sinopharm - DOH - Via Medica International"
                            />
                            <Vaccin
                                date="3rd Dose - 12 March 2022"
                                type="Sinopharm - DOH"
                                border={false}
                            />
                        </Stack>
                    </Paper>
                    <Box mt={3}>
                        <Center justifyContent="space-between">
                            <Text alpha={0.6}>Previous results</Text>
                            <Text color="#43b49b" alpha={1} fontWeight={500}>View all</Text>
                        </Center>
                        <Stack mt={1}>
                            <PCR date="19 Jun 2022" />
                            <PCR date="19 Jun 2022" />
                            <PCR date="19 Jun 2022" border={false} />
                        </Stack>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Alhosn;