import * as React from 'react';

type TooltipProps = {
    tooltip: React.ReactFragment;
    closeTooltip: (tooltip: React.ReactFragment) => void
}

export class TooltipComponent extends React.Component<TooltipProps> {
    constructor(props: TooltipProps) {
        super(props); 
    }
    
    render() {
        this.props.closeTooltip.bind(this);
        return <div id='tooltip-box'>
            <button id='close' onClick={ev=> { this.props.closeTooltip(this.props.tooltip) }}>x</button>
            {this.props.tooltip}
        </div>
    }
}