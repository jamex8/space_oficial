// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010101010101010109090101010101010101010101010101010101010101010101010101010101010101010101010101010708060501010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010402020202020a0202010101010901010a0101010101010101010101010101010201010101010101010101010101010102010101010101010102020a0202020203010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010109010101010101010901010101010101010101010101`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.forestTiles10,sprites.swamp.swampTile9,sprites.swamp.swampTile14,sprites.swamp.swampTile6,sprites.swamp.swampTile5,sprites.swamp.swampTile7,sprites.swamp.swampTile4,sprites.swamp.swampTile3,sprites.builtin.forestTiles8,sprites.swamp.swampTile13], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
