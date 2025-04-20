-- public.kairos definition

-- Drop table

-- DROP TABLE public.kairos;

CREATE TABLE public.kairos (
	fecha_extraccion timestamp NOT NULL,
	v1 int4 NULL,
	v2 varchar(100) NULL,
	dro_clave int4 NULL,
	droga varchar(250) NULL,
	drp_claveproducto int4 NULL,
	drp_clavedroga int4 NULL,
	formapresentacion varchar(250) NULL,
	clavepresentacion int4 NULL,
	pre_codigobarras varchar(20) NULL,
	pre_medio varchar(100) NULL,
	pre_codigotroquel varchar(20) NOT NULL,
	proclave int4 NULL,
	nombrecomercial varchar(250) NULL,
	pvp numeric NULL,
	fechavigencia timestamp NULL,
	prc_clavepresentacion int4 NULL,
	clavelab int4 NULL,
	laboratorio varchar(100) NULL,
	razonsocial varchar(100) NULL,
	codigo1 varchar(20) NULL,
	codigo2 int4 NULL,
	periodo int4 NULL,
	suma_drogas int4 NULL,
	forma varchar(100) NULL,
	forma2 varchar(100) NULL,
	formapresentacion_sin_dosis varchar(100) NULL,
	forma10 varchar(100) NULL,
	forma12 varchar(100) NULL,
	q int4 NULL,
	ppu numeric NULL,
	dosis numeric NULL,
	identificador varchar(100) NULL,
	droga_combo varchar(500) NULL,
	pm numeric(12, 10) NULL,
	pm_1 numeric(12, 10) NULL,
	pm_2 numeric(12, 10) NULL,
	nne int4 NULL,
	troquel varchar(20) NOT NULL
);