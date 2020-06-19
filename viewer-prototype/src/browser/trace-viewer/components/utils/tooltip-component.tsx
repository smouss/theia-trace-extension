import * as React from 'react';

type TooltipProps = {
    tooltip: { [key: string]: string };
    closeTooltip: (tooltip: React.ReactFragment) => void
}

export class TooltipComponent extends React.Component<TooltipProps> {
    constructor(props: TooltipProps) {
        super(props); 
    }

    renderTooltip() {
        const tooltipArray: any[] = [];
        if (this.props.tooltip) {
            const keys = Object.keys(this.props.tooltip);
            keys.forEach(key => {
                tooltipArray.push(<p key={key}>{key + ': ' + this.props.tooltip[key]}</p>);
            });
        }
        else {
            console.log('Tooltip null');
        }
        return <React.Fragment>
            {tooltipArray.map(element => {
                return element;
            })}
        </React.Fragment>
    }

    render() {
        this.props.closeTooltip.bind(this);
        return <div id='tooltip-box'>
            <button id='close' onClick={ev=> { this.props.closeTooltip(this.props.tooltip) }}>x</button>
            {this.renderTooltip()}
        </div>
    }
}