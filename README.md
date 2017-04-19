# react-cowsay

A react wrapper for [cowsay-browser](https://github.com/bushmango/cowsay-browser)

## Usage

```jsx
<Cowsay>I'm a cow!</Cowsay>
```

react-cowsay accepts almost all arguments from [cowsay](https://github.com/bushmango/cowsay-browser) as props. 

The only exception is `f` which does not accept a filepath, though any of the included cows can be used.

The options for cowsay are replicated here for convenience:

```
  -b  Mode: Borg                                                                                                                                  
  -d  Mode: Dead                                                                                                                                  
  -g  Mode: Greedy                                                                                                                                
  -p  Mode: Paranoia                                                                                                                              
  -s  Mode: Stoned                                                                                                                                
  -t  Mode: Tired                                                                                                                                 
  -w  Mode: Wired                                                                                                                                 
  -y  Mode: Youthful                                                                                                                              
  -e  Select the appearance of the cow's eyes.                                                                                                      [default: "oo"]
  -T  The tongue is configurable similarly to the eyes through -T and tongue_string.                                                                [default: "  "]                                                                                                               
  -n  If it is specified, the given message will not be word-wrapped.                                                                             
  -W  Specifies roughly where the message should be wrapped. The default is equivalent to -W 40 i.e. wrap words at or before the 40th column.       [default: 40]
  -f  Specifies a cow picture file (''cowfile'') to use. Use of the named cows included in the package.  [default: "default"]
```

Additionally text can be specified either as a prop or as children.

```jsx
<Cowsay>This works</Cowsay>
<Cowsay text="This also works" />
```

## Development

The development environment is already setup and ready to go (hot-loading and linting included!)

1. Build only your library component/components in /src folder (this is what will be published to npm)
2. Rendering for testing/development should be done in /site/src (this can also be used as a static site for examples, docs, etc.)
3. `yarn start` or `npm start`

## Testing

Tests are written in the `/test` directory, using [Jest](https://facebook.github.io/jest), and [enzyme](https://github.com/airbnb/enzyme)

## License

MIT