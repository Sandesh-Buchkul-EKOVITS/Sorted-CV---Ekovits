--
-- PostgreSQL database dump
--

\restrict 9sqRrxXxU0VBKOle1OZcfSo02ZpArrAtno3BhYokVqQn9ZxrrdKZ2AO0jRIDtiP

-- Dumped from database version 18.2
-- Dumped by pg_dump version 18.2

-- Started on 2026-02-28 10:33:30

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 220 (class 1259 OID 16388)
-- Name: contacts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.contacts (
    id integer NOT NULL,
    name character varying(100),
    email character varying(100),
    company character varying(100),
    phone character varying(20),
    message text,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.contacts OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16387)
-- Name: contacts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.contacts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.contacts_id_seq OWNER TO postgres;

--
-- TOC entry 4967 (class 0 OID 0)
-- Dependencies: 219
-- Name: contacts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.contacts_id_seq OWNED BY public.contacts.id;


--
-- TOC entry 4809 (class 2604 OID 16391)
-- Name: contacts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contacts ALTER COLUMN id SET DEFAULT nextval('public.contacts_id_seq'::regclass);


--
-- TOC entry 4961 (class 0 OID 16388)
-- Dependencies: 220
-- Data for Name: contacts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.contacts (id, name, email, company, phone, message, created_at) FROM stdin;
1	Gayatri Waghmare	gayatriwaghmare999@gmail.com	Ekovits	9359171730	xyz	2026-02-18 15:14:44.27709
2	Gayatri Waghmare	gayatriwaghmare999@gmail.com	Ekovits	9359171730	xyz	2026-02-19 11:39:37.209194
3	priya	priya@gmail.com	ekovit	9359171730	xyz	2026-02-19 11:39:54.187038
\.


--
-- TOC entry 4968 (class 0 OID 0)
-- Dependencies: 219
-- Name: contacts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.contacts_id_seq', 3, true);


--
-- TOC entry 4812 (class 2606 OID 16397)
-- Name: contacts contacts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contacts
    ADD CONSTRAINT contacts_pkey PRIMARY KEY (id);


-- Completed on 2026-02-28 10:33:31

--
-- PostgreSQL database dump complete
--

\unrestrict 9sqRrxXxU0VBKOle1OZcfSo02ZpArrAtno3BhYokVqQn9ZxrrdKZ2AO0jRIDtiP

