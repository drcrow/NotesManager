const { Router } = require( 'express' );
const router = Router();

router.route( '/' )
    .get( (req, res) => res.send('Response from Notes route') )
    .post()

router.route( '/:id' )
    .get()
    .put()
    .delete()


module.exports = router;