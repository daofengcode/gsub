import { Box, Divider, Typography } from '@mui/material'
import React from 'react'

type Props = {}

const Farm = (props: Props) => {
    return (
        <Box padding={3}>
            <Typography variant="h6" textAlign="center" paddingBottom={5}>
                团结所有追随爆料革命的灭共力量，华盛顿DC农场欢迎您！
            </Typography>
            <Divider>中文</Divider>
            <p>有意加入者请联系场主阿丙：</p>
            <ol>
                <li>Discord 私信：阿丙#8752</li>
                <li>邮件：himalaya.Washingtondc@gmail.com</li>
                <li>WhatsApp 私信： 1 (404) 512-1394</li>
            </ol>
            <p>申请加入华盛顿DC农场的战友，请您们填写 华盛顿DC农场申请表，请填写您们的真实的discord昵称+号码，并开通您的私信功能。 有一些战友申请了，但因为discord昵称或号码不对，或私信功能关闭，我没办法联系您们。同时您也可以私信我：阿丙#8752</p>
            <p>感谢您对DC农场的关注。</p>
            <Divider>English</Divider>
            <p>Following Miles Guo and the WhistleBlowers Movement，we are here to ‘Take Down the CCP (Chinese Communist Party)’.</p>
            <p>Ways to join us:</p>
            <ol>
                <li>Discord 私信：阿丙#8752</li>
                <li>Email：himalaya.Washingtondc@gmail.com</li>
                <li>WhatsApp ： 1 (404) 512-1394</li>
            </ol>
        </Box>
    )
}

export default Farm