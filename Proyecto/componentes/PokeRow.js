import React from 'react'
import PokeAvatar from './PokeAvatar'
class PokeRow extends React.Component{
	render()
	{
		
		return 	<li className="porkerow">
					<PokeAvatar number={this.props.number} />
					{this.props.name}
				</li>
	}
}
export default PokeRow