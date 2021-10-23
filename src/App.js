import React, { useState } from 'react';
import { 
	View,
	AdaptivityProvider, 
	AppRoot, 
} from '@vkontakte/vkui';

import '@vkontakte/vkui/dist/vkui.css';

import Main from './panels/main'
import About from './panels/about'
const App = () => {
	const [activePanel, setActivePanel] = useState('main');


	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<AdaptivityProvider>
			<AppRoot>
				<View activePanel={activePanel}>
					<Main id="main" go={go} />
					<About id="about" go={go} />
				</View>
			</AppRoot>
		</AdaptivityProvider>
	);
}

export default App;
