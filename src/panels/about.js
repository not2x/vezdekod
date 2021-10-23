import React from "react";
import {
    Panel,
    PanelHeader,
    Gradient,
	PanelHeaderBack,
    Avatar,
    Text,
    Title,
    Group,
    Cell,
    Header
} from '@vkontakte/vkui';
import { Icon28LaptopOutline } from '@vkontakte/icons';
import { Icon56SchoolOutline } from '@vkontakte/icons';
import ava from '../img/ava.jpg'

function About(props) {
    return (
        <Panel id={props.id}>
            <PanelHeader left={<PanelHeaderBack data-to="main" onClick={props.go} />}> О участнике</PanelHeader>
            <Group>
                <Gradient style={{
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: 32,
                }}>
                    <Avatar 
                        size={96}
                        src={ava}
                    />
                    <Title style={{ marginBottom: 8, marginTop: 20 }} level="2" weight="medium">Вадим Егоров</Title>
                    <Text style={{ marginBottom: 24, color: 'var(--text_secondary)' }}>Участник вездекода</Text>
                </Gradient>
                <Group mode="plain" header={<Header>Обо мне </Header>}>
                    <Cell
                        disabled={true}
                        before={<Icon56SchoolOutline width={28} height={28}/>}
                        >
                        Глубокская районная гимназия
                    </Cell>
                    <Cell
                        disabled={true}
                        before={<Icon28LaptopOutline width={28} height={28}/>} 
                    >Python, JS, React</Cell>
                </Group>
            </Group>
        </Panel>
    )
}

export default About;