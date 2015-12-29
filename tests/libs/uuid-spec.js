import uuid from '../../libs/uuid';

describe( 'uuid 函数' , ()=> {
  it( '返回一个 string' , ()=> {
    expect( typeof uuid() ).toBe( 'string' );
  } );

  it( '多次返回的值都不相同' , ()=> {
    const m = [];
    for ( let i = 0 ; i < 10000 ; i += 1 ) {
      m[ i ] = uuid();
    }

    const map = {};

    m.some( ( v )=> {
      if ( map[ v ] ) {
        fail( 'uuid 的返回值中有重复元素：' + v );
        return true;
      } else {
        map[ v ] = 1;
      }
    } );

  } );
} );
