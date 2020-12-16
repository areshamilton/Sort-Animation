import React from 'react';
import './SortAnimation.css';

export default class SortAnimation extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { sequence: [], };
    }

    componentDidMount()//initial display
    {
        this.generate_sequence();
    }

    generate_sequence()//create array with random values
    {
        const sequence = [];
        for (var i = 0; i < 80; ++i)
        {
            sequence.push(Math.floor(Math.random() * (600) +10));
        }
        this.setState({sequence});
    }

    render()//display values on screen
    {
        const {sequence} = this.state;
        return (
           <div className = "sequence-whole">
           {sequence.map(
            (value, idx) => 
                (
                <div
                   className = "sequence-element"
                   key = {idx}
                   style = {{height: `${value}px`}}></div>
                 )
             )
            }
            <button onClick = {() => this.generate_sequence()}>Generate New Sequence</button>
            <button onClick = {() => this.selection_sort(this.state.sequence)}>Sort Sequence</button>
           </div>
        );
    }

    selection_sort(arr)//use selection sort to reorder the elements of the sequence
    {
        var i;
        var n = arr.length;
        for (i = 0; i <= n; ++i)
        {
            var min = i;
            for (var j = i + 1; j < n; ++j)
            {
                setTimeout(() => { this.update_display(arr); }, (1000*i+1)*10); 
                if (arr[j] < arr[min]) min = j;
            }
            var t = arr[i];
            arr[i] = arr[min];
            arr[min] = t;
        }
    }

    update_display(arr)
    {
        this.setState({arr});
    }
}
