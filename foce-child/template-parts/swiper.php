<?php
$args = array(
	'post_type'      => 'characters', // Type de publication : personnages
	'posts_per_page' => -1, // Nombre de publications par page : -1 (toutes)
	'meta_key'       => '_main_char_field', // Clé de métadonnées : champ principal du personnage
	'orderby'        => 'meta_value_num', // Trier par : valeur numérique des métadonnées
	'order'          => 'ASC', // Ordre : croissant
);
$characters_query = new WP_Query($args); // Créer une requête WordPress avec les arguments spécifiés
?>

<!-- Slider main container -->
<div class="swiper">
	<!-- Additional required wrapper -->
	<div class="swiper-wrapper">
		<?php while ($characters_query->have_posts()) : $characters_query->the_post(); ?>
			<div class="swiper-slide">
				<?php
				echo get_the_post_thumbnail(get_the_ID(), 'full'); // Afficher la vignette de la publication en taille complète
				the_title(); // Afficher le titre de la publication
				?>
			</div>
		<?php endwhile; ?>
	</div>
</div>
